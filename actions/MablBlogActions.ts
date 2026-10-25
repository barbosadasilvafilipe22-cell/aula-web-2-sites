import { Page, expect } from '@playwright/test'
import { URLS } from '../utils/urls'
import { MablBlogLocators } from '../locators/MablBlogLocators'

export class MablBlogActions {
  private page: Page
  private locators: MablBlogLocators

  constructor(page: Page) {
    this.page = page
    this.locators = new MablBlogLocators(page)
  }

  async goto() {
    await this.page.goto(URLS.mablBlog, { waitUntil: 'domcontentloaded' })
  }

  async validarPagina() {
    await expect(this.page).toHaveTitle(/mabl blog/i)
    await expect(this.locators.tituloPrincipal).toBeVisible({ timeout: 30_000 })
    await expect(this.locators.campoBusca).toBeVisible()
    await expect(this.locators.botaoBuscar).toBeVisible()
  }

  async validarBuscaVazia() {
    await this.locators.botaoBuscar.click()

    const resultado = await this.locators.campoBusca.evaluate((campo: HTMLInputElement) => ({
      valido: campo.checkValidity(),
      obrigatorio: campo.validity.valueMissing,
      mensagem: campo.validationMessage,
    }))

    expect(resultado.valido).toBe(false)
    expect(resultado.obrigatorio).toBe(true)
    expect(resultado.mensagem.length).toBeGreaterThan(0)
    await expect(this.page).toHaveURL(/\/blog$/)
  }

  async buscar(termo: string) {
    await this.locators.campoBusca.fill(termo)
    await this.locators.botaoBuscar.click()

    await expect(this.page).toHaveURL(new RegExp(`search=${termo}`))
    await expect(this.locators.tituloResultados).toBeVisible({ timeout: 30_000 })
  }
}
