import { test } from '../../fixtures/MablFixtures'

test.describe('mabl - Pricing', () => {
  test('deve navegar para a página de preços', async ({ navegacao }) => {
    await navegacao.goto()
    await navegacao.acessarPricing()
  })
})
