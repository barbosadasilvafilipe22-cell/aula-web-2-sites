import { Locator, Page } from '@playwright/test'

export class MablHomeLocators {
  readonly tituloPrincipal: Locator
  readonly linkPricing: Locator
  readonly linkTrial: Locator
  readonly linkDemo: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', {
      level: 1,
      name: /code outrun confidence/i,
    })
    this.linkPricing = page.locator('a[href*="/pricing"]').filter({ visible: true }).first()
    this.linkTrial = page
      .locator('a[href*="trial-registration"]')
      .filter({ visible: true })
      .first()
    this.linkDemo = page
      .locator('a[href*="mabl-demo-request"]')
      .filter({ visible: true })
      .first()
  }
}
