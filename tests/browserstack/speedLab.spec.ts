import { test } from '../../fixtures/BrowserStackFixtures'

test.describe('BrowserStack - SpeedLab', () => {
  test('deve exibir o formulário de teste de velocidade', async ({ navegacao, speedLab }) => {
    await navegacao.irParaSpeedLab()
    await speedLab.validarFormularioVisivel()
  })

  test('deve invalidar uma URL com formato incorreto', async ({ navegacao, speedLab }) => {
    await navegacao.irParaSpeedLab()
    await speedLab.validarUrlInvalida('url-invalida')
  })

  test('deve aceitar uma URL com formato válido', async ({ navegacao, speedLab }) => {
    await navegacao.irParaSpeedLab()
    await speedLab.validarUrlValida('https://example.com')
  })
})
