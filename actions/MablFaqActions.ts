import { Page, expect } from '@playwright/test'
import { MablPricingLocators } from '../locators/MablPricingLocators'

export class MablFaqActions {
  private page: Page
  private locators: MablPricingLocators

  constructor(page: Page) {
    this.page = page
    this.locators = new MablPricingLocators(page)
  }

  async abrirPerguntaSetupFees() {
    await expect(this.locators.perguntaSetupFees).toBeVisible()
    await this.locators.perguntaSetupFees.click()
  }

  async validarRespostaSetupFeesVisivel() {
    await expect(this.locators.respostaSetupFees).toBeVisible()
    await expect(this.locators.respostaSetupFees).toContainText('no setup fees or hidden charges')
  }

  async fecharPerguntaSetupFees() {
    await this.locators.perguntaSetupFees.click()
    await expect(this.locators.respostaSetupFees).toBeHidden()
  }
}
