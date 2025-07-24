import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage-sec.schoolofpe.inoryasoft.com/oauth/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('sp181.1@ino.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('stsamgie');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('http://stage-studyhub2.inoryasoft.com/dashboard');
});