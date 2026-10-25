import { test } from '../../fixtures/BrowserStackFixtures'

test.describe('BrowserStack - Live', () => {
  test('deve navegar para a página do produto Live', async ({ navegacao }) => {
    await navegacao.goto()
    await navegacao.acessarLive()
  })
})
