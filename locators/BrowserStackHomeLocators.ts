import { Locator, Page } from '@playwright/test'

export class BrowserStackHomeLocators {
  readonly logotipo: Locator
  readonly tituloPrincipal: Locator
  readonly linkPricing: Locator
  readonly linkFreeTrial: Locator
  readonly linkLive: Locator
  readonly linkSpeedLab: Locator

  constructor(page: Page) {
    this.logotipo = page.getByRole('link', { name: 'BrowserStack Logo' }).first()
    this.tituloPrincipal = page.getByRole('heading', {
      level: 1,
      name: /Everything you need for testing/,
    })
    this.linkPricing = page.locator('header').getByRole('link', { name: 'Pricing', exact: true })
    this.linkFreeTrial = page.locator('header a[href="/users/sign_up"]').first()
    this.linkLive = page.locator('a[href="/live"]').filter({ visible: true }).first()
  }
}
