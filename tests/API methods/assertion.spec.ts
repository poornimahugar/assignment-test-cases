import test, {page,expect} from '@playwright/test';

test('assertions demo',async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
})