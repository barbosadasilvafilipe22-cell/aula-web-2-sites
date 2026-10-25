import { test } from '../../fixtures/MablFixtures'

test.describe('mabl - Blog', () => {
  test('deve exibir a página do blog com o formulário de busca', async ({ blog }) => {
    await blog.goto()
    await blog.validarPagina()
  })

  test('deve impedir a busca com o campo vazio', async ({ blog }) => {
    await blog.goto()
    await blog.validarBuscaVazia()
  })

  test('deve buscar por um termo e exibir os resultados', async ({ blog }) => {
    await blog.goto()
    await blog.buscar('automation')
  })
})
