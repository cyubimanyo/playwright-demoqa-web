import { test, expect } from '@playwright/test';
import { ListPage } from '../pages/list.page.js';

test.describe('[WEB] - Selectable List', () => {

  const testCases = [
    { tcCode: '01_', name: '1 item', indexes: [0], expected: 1 },
    { tcCode: '02_', name: '2 items', indexes: [0, 1], expected: 2 },
    { tcCode: '03_', name: '3 items', indexes: [0, 1, 2], expected: 3 },
    { tcCode: '04_', name: 'all items', indexes: [0, 1, 2, 3], expected: 4 },
  ];

  for (const tc of testCases) {
    test(`${tc.tcCode}User can select ${tc.name}`, async ({ page }) => {
      const listPage = new ListPage(page);

      await listPage.goto();
      await listPage.openMenuInteractions();

      await listPage.selectItems(tc.indexes);
      await listPage.validateSelectedCount(tc.expected);
    });
  }

});