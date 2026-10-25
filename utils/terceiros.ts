import { Page } from '@playwright/test'

/**
 * Bloqueia scripts de analytics, propaganda e banners de cookies.
 * Isso deixa os testes mais rápidos e evita que overlays interfiram nos cliques.
 */
const DOMINIOS_BLOQUEADOS = [
  'google-analytics.com',
  'googletagmanager.com',
  'doubleclick.net',
  'facebook.net',
  'hs-analytics.net',
  'hs-banner.com',
  'mktoresp.com',
  'marketo.net',
  'munchkin.marketo.net',
  'cookieyes.com',
  'onetrust.com',
  'cookielaw.org',
  'cookiebot.com',
  'trustarc.com',
  'segment.io',
  'segment.com',
  'intercom.io',
  'crazyegg.com',
  'zoominfo.com',
  'fullcontact.com',
  'adsrvr.org',
  'turn.com',
  'claydar.com',
  'revsure.cloud',
  '6sc.co',
  'sayprimer.com',
  'licdn.com',
  'quora.com',
  'ads-twitter.com',
]

export async function bloquearTerceiros(page: Page) {
  await page.route('**/*', (route) => {
    const url = route.request().url()

    if (DOMINIOS_BLOQUEADOS.some((dominio) => url.includes(dominio))) {
      return route.abort()
    }

    return route.continue()
  })
}
