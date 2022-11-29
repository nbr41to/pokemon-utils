import type { Pokemon } from './utils';

import puppeteer from 'puppeteer';

export const getPokemons = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    /* game with */
    const url = 'https://gamewith.jp/pokemon-sv/article/show/373315';
    await page.goto(url);
    const table = await page.$('#PokemonList');
    const rows = await table?.$$('li.w-pksv-pokemon-list-element');
    if (!rows) throw new Error('table is undefined');

    const pokemons: Pokemon[] = await Promise.all(
      rows.map(async (row) => {
        const no = await row.evaluate((node) => node.getAttribute('no'));
        const name = await row.evaluate((node) => node.getAttribute('name'));
        const hitPoint = await row.evaluate((node) =>
          node.getAttribute('base-h')
        );
        const attack = await row.evaluate((node) =>
          node.getAttribute('base-a')
        );
        const block = await row.evaluate((node) => node.getAttribute('base-b'));
        const contact = await row.evaluate((node) =>
          node.getAttribute('base-c')
        );
        const diffencet = await row.evaluate((node) =>
          node.getAttribute('base-d')
        );
        const speed = await row.evaluate((node) => node.getAttribute('base-s'));
        const total = await row.evaluate((node) =>
          node.getAttribute('base-total')
        );
        const abilityEle = await row.$$(
          '._inner ._inner-table ._body ._chara-column card'
        );
        const abilities = await Promise.all(
          abilityEle.map(async (ele) => {
            const text = await ele.evaluate((node) => node.textContent);

            return text || 'null';
          })
        );

        return {
          no: no || 'null',
          name: name || 'null',
          hitPoint: hitPoint || 'null',
          attack: attack || 'null',
          block: block || 'null',
          contact: contact || 'null',
          diffencet: diffencet || 'null',
          speed: speed || 'null',
          total: total || 'null',
          abilities: abilities || 'null',
        };
      })
    );

    /* poke tetsu */
    // const url = 'https://yakkun.com/sv/stats_list.htm';
    // await page.goto(url);
    // const tableXPath = '//*[@id="contents"]/div[3]/div/table/tbody';
    // const table = await page.$x(tableXPath);
    // const rows = await table[0].$$('tr');

    // const array = await Promise.all(
    //   rows.map(async (row) => {
    //     const cells = await row.$$('td');
    //     const data = await Promise.all(
    //       cells.map(async (cell) => {
    //         // const text = await cell.evaluate((node) => node.textContent); // これでもいける
    //         const jsHandle = await cell.getProperty('textContent');
    //         const text = await jsHandle.jsonValue();

    //         return text || '-';
    //       })
    //     );

    //     return data;
    //   })
    // );

    // const list = array.map((data) => {
    //   const [no, name, h, a, b, c, d, s, total] = data;

    //   return { no, name, h, a, b, c, d, s, total };
    // });

    await browser.close();

    return pokemons;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return [];
  }
};
