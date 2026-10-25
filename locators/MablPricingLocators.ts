import { Locator, Page } from '@playwright/test'

export class MablPricingLocators {
  readonly tituloPrincipal: Locator
  readonly perguntaSetupFees: Locator
  readonly respostaSetupFees: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', {
      level: 1,
      name: 'Pricing That Unlocks All Your Testing Needs',
    })
    this.perguntaSetupFees = page.getByRole('heading', { level: 3, name: /setup fees/i })
    this.respostaSetupFees = page
      .locator('.accordion-item-content-2')
      .filter({ hasText: 'No, mabl is committed to transparency' })
  }
}
