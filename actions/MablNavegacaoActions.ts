import { Page, expect } from '@playwright/test'
import { URLS } from '../utils/urls'
import { MablHomeLocators } from '../locators/MablHomeLocators'
import { MablPricingLocators } from '../locators/MablPricingLocators'

export class MablNavegacaoActions {
  private page: Page
  private home: MablHomeLocators
  private pricing: MablPricingLocators

  constructor(page: Page) {
    this.page = page
    this.home = new MablHomeLocators(page)
    this.pricing = new MablPricingLocators(page)
  }

  async goto() {
    await this.page.goto(URLS.mabl, { waitUntil: 'domcontentloaded' })
  }

  async validarHome() {
    await expect(this.page).toHaveTitle(/Agentic Testing/i)
    await expect(this.home.tituloPrincipal).toBeVisible({ timeout: 30_000 })
    await expect(this.home.linkPricing).toBeVisible()
    await expect(this.home.linkTrial).toBeVisible()
    await expect(this.home.linkTrial).toHaveAttribute('href', /trial-registration/)
    await expect(this.home.linkDemo).toBeVisible()
  }

  async acessarPricing() {
    await this.home.linkPricing.click()
    await expect(this.page).toHaveURL(/\/pricing/)
    await expect(this.pricing.tituloPrincipal).toBeVisible({ timeout: 30_000 })
  }
}
