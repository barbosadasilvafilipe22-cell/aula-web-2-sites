import { test as base } from '@playwright/test'
import { BrowserStackNavegacaoActions } from '../actions/BrowserStackNavegacaoActions'
import { BrowserStackSpeedLabActions } from '../actions/BrowserStackSpeedLabActions'
import { bloquearTerceiros } from '../utils/terceiros'

type BrowserStackFixtures = {
  navegacao: BrowserStackNavegacaoActions
  speedLab: BrowserStackSpeedLabActions
}

export const test = base.extend<BrowserStackFixtures>({
  navegacao: async ({ page }, use) => {
    await use(new BrowserStackNavegacaoActions(page))
  },

  speedLab: async ({ page }, use) => {
    await use(new BrowserStackSpeedLabActions(page))
  },
})

test.beforeEach(async ({ page }) => {
  await bloquearTerceiros(page)
})
