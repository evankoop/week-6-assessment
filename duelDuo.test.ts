
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(5000)

})

test('Draw button displays when page loads', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays when page loads', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins counter is displayed when page loads', async () => {
    const winsCounter = await driver.findElement(By.xpath('//h2[contains(text(), "Wins")]'))
    const displayed = await winsCounter.isDisplayed()
    expect(displayed).toBe(true)
})

