import { Locator, Page } from '@playwright/test'

export class BrowserStackLiveLocators {
  readonly tituloPrincipal: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', {
      level: 1,
      name: /Cross browser testing on desktop/,
    })
  }
}
