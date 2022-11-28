import puppeteer from 'puppeteer';

export type Pokemon = {
  no: string;
  name: string;
  h: string;
  a: string;
  b: string;
  c: string;
  d: string;
  s: string;
  total: string;
};

export const getPokemons = async () => {
  try {
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

    return list;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return [];
  }
};
