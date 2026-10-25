import { test } from '../../fixtures/BrowserStackFixtures'

test.describe('BrowserStack - Home', () => {
  test('deve exibir a página inicial com os principais links', async ({ navegacao }) => {
    await navegacao.goto()
    await navegacao.validarHome()
  })
})
