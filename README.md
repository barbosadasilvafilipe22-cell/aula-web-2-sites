# aula-web-2-sites

Trabalho prático de Automação de Testes Web com **Playwright + TypeScript**.

**Dupla:** Filipe Barbosa e Pedro

**Repositório:** https://github.com/barbosadasilvafilipe22-cell/aula-web-2-sites

Projeto de automação de testes para dois sites: **BrowserStack** e **mabl**.

O projeto segue o padrão `locators` → `actions` → `fixtures` → `tests`.

## Cenários

| Site | Testes | Cenários |
| --- | --- | --- |
| BrowserStack | 6 | Home, Pricing, produto Live, formulário do SpeedLab (válido e inválido) |
| mabl | 6 | Home, Pricing, accordion de FAQ, busca do blog (vazia e com termo) |

## Estrutura

```
locators/    seletores de cada página
actions/     ações e validações de cada fluxo
fixtures/    injeção das actions nos testes
tests/       specs organizados por site
utils/       URLs e bloqueio de scripts de terceiros
```

## Como executar

```bash
npm install
npx playwright install chromium
npm test
```

Comandos auxiliares:

```bash
npm run test:headed        # navegador visível
npm run test:browserstack  # somente BrowserStack
npm run test:mabl          # somente mabl
npm run report             # abre o relatório HTML
```

## Observações

- Os dois sites são ambientes de produção. Os testes são somente de leitura e
  validação de formulário; nenhum cadastro, login ou envio de lead é realizado.
- Formulários com reCAPTCHA/Cloudflare Turnstile (login/cadastro do
  BrowserStack) e formulários Marketo (demo/contato do mabl) foram evitados de
  propósito, pois dependem de captcha ou de serviços externos instáveis.
- O helper `utils/terceiros.ts` bloqueia analytics, propagandas e banners de
  cookies para deixar a execução mais rápida e estável.
