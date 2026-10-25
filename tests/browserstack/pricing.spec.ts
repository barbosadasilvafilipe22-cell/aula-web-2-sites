import { test } from '../../fixtures/BrowserStackFixtures'

test.describe('BrowserStack - Pricing', () => {
  test('deve navegar do menu para a página de preços', async ({ navegacao }) => {
    await navegacao.goto()
    await navegacao.acessarPricing()
  })
})
