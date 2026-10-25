import { Page, expect } from '@playwright/test'
import { BrowserStackSpeedLabLocators } from '../locators/BrowserStackSpeedLabLocators'

export class BrowserStackSpeedLabActions {
  private locators: BrowserStackSpeedLabLocators

  constructor(page: Page) {
    this.locators = new BrowserStackSpeedLabLocators(page)
  }

  async validarFormularioVisivel() {
    await expect(this.locators.campoUrl).toBeVisible({ timeout: 30_000 })
    await expect(this.locators.botaoTestar).toBeVisible()
  }

  async informarUrl(url: string) {
    await this.locators.campoUrl.fill(url)
  }

  async validarUrlInvalida(url: string) {
    await this.informarUrl(url)

    const resultado = await this.locators.campoUrl.evaluate((campo: HTMLInputElement) => ({
      valido: campo.checkValidity(),
      formatoInvalido: campo.validity.patternMismatch,
      mensagem: campo.validationMessage,
    }))

    expect(resultado.valido).toBe(false)
    expect(resultado.formatoInvalido).toBe(true)
    expect(resultado.mensagem.length).toBeGreaterThan(0)
  }

  async validarUrlValida(url: string) {
    await this.informarUrl(url)

    const valido = await this.locators.campoUrl.evaluate((campo: HTMLInputElement) =>
      campo.checkValidity(),
    )

    expect(valido).toBe(true)
  }
}
