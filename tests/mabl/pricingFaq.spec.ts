import { test } from '../../fixtures/MablFixtures'

test.describe('mabl - FAQ de preços', () => {
  test('deve abrir e fechar a resposta sobre taxas escondidas', async ({ navegacao, faq }) => {
    await navegacao.goto()
    await navegacao.acessarPricing()

    await faq.abrirPerguntaSetupFees()
    await faq.validarRespostaSetupFeesVisivel()
    await faq.fecharPerguntaSetupFees()
  })
})
