import { Locator, Page } from '@playwright/test'

export class BrowserStackPricingLocators {
  readonly tituloPrincipal: Locator
  readonly planoTeamPro: Locator
  readonly planoEnterprise: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', {
      level: 1,
      name: /Real device cloud of 35,000/,
    })
    this.planoTeamPro = page.getByText('Team Pro', { exact: true }).filter({ visible: true }).first()
    this.planoEnterprise = page
      .getByText('Enterprise', { exact: true })
      .filter({ visible: true })
      .first()
  }
}
