const {test, expect} = require('playwright/test');

test('Login to CC', async ({ page }) => {

// 1. Go to login page
await page.goto('https://pagegroup--sit.sandbox.my.salesforce.com/');
const pageTitle= page.title();
console.log('The page title is:', pageTitle);
await expect(page).toHaveTitle('Login | Salesforce');
// 2. Type username and password
await page.fill('#username', 'qa.auto.sysadmin@michaelpage.com.sit');    // replace with actual selector
await page.fill('#password', 'London2025$$$$$');    // replace with actual selector 
// 3. Click login button
await page.click('#Login');    // replace with actual selector  
// 4. Wait for navigation or dashboard to load    
await page.waitForNavigation();
console.log('Login successful!');
// Perform any other actions after login...
});