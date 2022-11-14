import { expect, Locator, Page } from '@playwright/test';

export class GoogleHomePage {
  readonly page: Page;
  readonly url = 'https://www.google.com/ncr';
  readonly googleLogoImage: Locator;
  readonly searchBar : Locator;

  constructor(page: Page) {
    this.page = page;
      // https://playwright.dev/docs/selectors
    this.googleLogoImage = page.locator('img[alt="Google"]');
    this.searchBar = page.locator('input[name="q"]');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async expectGoogleLogoToBeDisplayed() {
    await expect(this.googleLogoImage).toHaveScreenshot();
  }

  async expectPageTitleToBeCorrect(){
    await expect(this.page).toHaveTitle('Google');
  }

  async searchFor(query : string){
    await this.searchBar.type(query);
    await this.searchBar.press('Enter');
  }
}