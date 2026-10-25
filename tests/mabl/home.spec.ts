import { test } from '../../fixtures/MablFixtures'

test.describe('mabl - Home', () => {
  test('deve exibir a página inicial com os principais links', async ({ navegacao }) => {
    await navegacao.goto()
    await navegacao.validarHome()
  })
})
