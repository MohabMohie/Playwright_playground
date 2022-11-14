import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";
import { GoogleHomePage } from "../pages/google/home";
import { GoogleResultsPage } from '../pages/google/results';
import testData from '../testData/googleSmoke.json';

test('Story #1 - Validate Page Components', async ({ page, context }) => {
    allure.feature('Google POC Feature');
    allure.description('When I navigate to Google homepage, Then the Page Title should be "Google", And the Google Logo should be displayed.');

    const googleHomePage = new GoogleHomePage(page);
    await test.step('When I navigate to Google homepage', async () => {
        await googleHomePage.goto();
    });

    await test.step('Then the Page Title should be "Google"', async () => {
        await googleHomePage.expectPageTitleToBeCorrect();
    });

    await test.step('And the Google logo should be displayed', async () => {
        await googleHomePage.expectGoogleLogoToBeDisplayed();
    });
});

test('Story #2 - Validate Search Functionality', async ({ page, context }) => {
    allure.feature('Google POC Feature');
    allure.description('When I navigate to Google homepage, And search for "Microsoft Playwright", Then "Result Stats" should not be empty.');

    const googleHomePage = new GoogleHomePage(page);
    await test.step('When I navigate to Google homepage', async () => {
        await googleHomePage.goto();
    });

    await test.step('And search for "Microsoft Playwright"', async () => {
        await googleHomePage.searchFor(testData.google.search.query);
    });

    const googleResultsPage = new GoogleResultsPage(page);
    await test.step('Then "Result Stats" should not be empty', async () => {
        await googleResultsPage.expectResultStatsToBeNotEmpty();
    });
});