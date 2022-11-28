import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pokemon } from 'src/utils';

import puppeteer from 'puppeteer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://yakkun.com/sv/stats_list.htm';
  await page.goto(url);

  const tableXPath = '//*[@id="contents"]/div[3]/div/table/tbody';
  const table = await page.$x(tableXPath);
  const rows = await table[0].$$('tr');

  const array = await Promise.all(
    rows.map(async (row) => {
      const cells = await row.$$('td');
      const data = await Promise.all(
        cells.map(async (cell) => {
          // const text = await cell.evaluate((node) => node.textContent); // これでもいける
          const jsHandle = await cell.getProperty('textContent');
          const text = await jsHandle.jsonValue();

          return text || '-';
        })
      );

      return data;
    })
  );

  const list = array.map((data) => {
    const [no, name, h, a, b, c, d, s, total] = data;

    return { no, name, h, a, b, c, d, s, total };
  });

  await browser.close();

  res.status(200).json(list);
}
