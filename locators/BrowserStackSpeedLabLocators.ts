import { Locator, Page } from '@playwright/test'

export class BrowserStackSpeedLabLocators {
  readonly tituloPrincipal: Locator
  readonly campoUrl: Locator
  readonly botaoTestar: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', { level: 1, name: /Test website speed/ })
    this.campoUrl = page.locator('#performance-url')
    this.botaoTestar = page.locator('#performance-submit')
  }
}
