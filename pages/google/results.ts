import { expect, Locator, Page } from '@playwright/test';

export class GoogleResultsPage {
  readonly page: Page;
  readonly resultStatsLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultStatsLabel = page.locator('div#result-stats');
  }

  async expectResultStatsToBeNotEmpty() {
    await expect(this.resultStatsLabel).not.toHaveText('');
  }
}