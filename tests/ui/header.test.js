const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://smish-exam.onrender.com');
    const homeLink = await page.$('a[href="/Shopping-List"]');
    const text = await homeLink.textContent();
    expect(text).toBe('View Shopping List');
  });
  