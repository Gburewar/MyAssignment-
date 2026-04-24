import test, { expect } from "@playwright/test";
 
 
test('Locators & Assertion',async({page})=>{
await page.goto('https://www.pvrcinemas.com')
await page.locator(`//h6[@class="cities-name pointer" and text()='Chennai']`).click()
//await page.getByText('Chennai').click()
await page.locator(`//div[@class="date-show"]/span[@class="cinemas-inactive"]`).click()
//await page.getByText(`//span[@class="p-dropdown-label p-inputtext p-placeholder" and text()='Select Cinema']`).click()
await page.locator(`//span[@class="p-dropdown-label p-inputtext p-placeholder" and text()='Select Cinema']`).click()
//await page.locator(`//div[@id="cinema"]//span`).click()
await page.locator(`(//li[@class="p-dropdown-item"]/span)[1]`).click()
//await page.locator(`//div[@id="date"]/span`).click()
//await page.locator(`//li[@class="p-dropdown-item"]/span`).click()
await page.locator(`(//div[@class="p-dropdown-items-wrapper"]//span)[2]`).click()
await page.locator(`(//div[@class="p-dropdown-items-wrapper"]//li)[2]`).click()
await page.locator(`//div[@class="p-dropdown-items-wrapper"]//span[@class="mx-2" and text()='12:10 PM']`).click()
await page.locator(`//button[@class="p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn"]`).click()
await page.locator(`//button[@class="sc-kCuUfV iBvycX reject-terms"]`).click()
await page.locator(`//button[@class="sc-kCuUfV iBvycX reject-terms"]`).click()
await page.locator(`//span[@id="SL.SILVER|C:19"]`).click()
await expect(page.locator(`//div[@class="summary-movies-content"] and contains(normalize-text(),'MUMMY')`)).toBeVisible
await page.waitForTimeout(5000)
//await expect(page.locator(`//div[@class="seat-number"] and contains(normalize-text(),'C19'`)).toBeVisible()
let a= await page.locator(`//div[@class="seat-number"]/p`).innerText()
console.log(a);
await page.locator(a).isVisible()
 
await page.waitForTimeout(5000)
})