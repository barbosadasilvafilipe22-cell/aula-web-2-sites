import { test as base } from '@playwright/test'
import { MablNavegacaoActions } from '../actions/MablNavegacaoActions'
import { MablFaqActions } from '../actions/MablFaqActions'
import { MablBlogActions } from '../actions/MablBlogActions'
import { bloquearTerceiros } from '../utils/terceiros'

type MablFixtures = {
  navegacao: MablNavegacaoActions
  faq: MablFaqActions
  blog: MablBlogActions
}

export const test = base.extend<MablFixtures>({
  navegacao: async ({ page }, use) => {
    await use(new MablNavegacaoActions(page))
  },

  faq: async ({ page }, use) => {
    await use(new MablFaqActions(page))
  },

  blog: async ({ page }, use) => {
    await use(new MablBlogActions(page))
  },
})

test.beforeEach(async ({ page }) => {
  await bloquearTerceiros(page)
})
