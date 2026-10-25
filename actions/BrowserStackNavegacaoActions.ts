import { Page, expect } from '@playwright/test'
import { URLS } from '../utils/urls'
import { BrowserStackHomeLocators } from '../locators/BrowserStackHomeLocators'
import { BrowserStackPricingLocators } from '../locators/BrowserStackPricingLocators'
import { BrowserStackLiveLocators } from '../locators/BrowserStackLiveLocators'

export class BrowserStackNavegacaoActions {
  private page: Page
  private home: BrowserStackHomeLocators
  private pricing: BrowserStackPricingLocators
  private live: BrowserStackLiveLocators

  constructor(page: Page) {
    this.page = page
    this.home = new BrowserStackHomeLocators(page)
    this.pricing = new BrowserStackPricingLocators(page)
    this.live = new BrowserStackLiveLocators(page)
  }

  async goto() {
    await this.page.goto(URLS.browserStack, { waitUntil: 'domcontentloaded' })
  }

  async validarHome() {
    await expect(this.page).toHaveTitle(/BrowserStack/)
    await expect(this.home.tituloPrincipal).toBeVisible({ timeout: 30_000 })
    await expect(this.home.logotipo).toBeVisible()
    await expect(this.home.linkPricing).toBeVisible()
    await expect(this.home.linkFreeTrial).toBeVisible()
    await expect(this.home.linkFreeTrial).toHaveAttribute('href', '/users/sign_up')
  }

  async acessarPricing() {
    await this.home.linkPricing.click()
    await expect(this.page).toHaveURL(/\/pricing/)
    await expect(this.pricing.tituloPrincipal).toBeVisible({ timeout: 30_000 })
    await expect(this.pricing.planoTeamPro).toBeVisible()
    await expect(this.pricing.planoEnterprise).toBeVisible()
  }

  async acessarLive() {
    await this.home.linkLive.click()
    await expect(this.page).toHaveURL(/\/live/)
    await expect(this.live.tituloPrincipal).toBeVisible({ timeout: 30_000 })
  }

  async irParaSpeedLab() {
    await this.page.goto(URLS.browserStackSpeedLab, { waitUntil: 'domcontentloaded' })
  }
}
