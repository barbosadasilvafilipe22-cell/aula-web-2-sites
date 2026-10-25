import { Locator, Page } from '@playwright/test'

export class MablBlogLocators {
  readonly tituloPrincipal: Locator
  readonly formularioBusca: Locator
  readonly campoBusca: Locator
  readonly botaoBuscar: Locator
  readonly tituloResultados: Locator

  constructor(page: Page) {
    this.tituloPrincipal = page.getByRole('heading', { level: 1, name: /Agentic testing blog/i })
    this.formularioBusca = page.locator('form.search')
    this.campoBusca = this.formularioBusca.getByPlaceholder('Find a Resource by Keyword...')
    this.botaoBuscar = this.formularioBusca.getByRole('button', { name: 'Search' })
    this.tituloResultados = page.getByText('SEARCH ALL POSTS')
  }
}
