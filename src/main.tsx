import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import global_en from "./translation/en/global.json"
import global_ba from "./translation/ba/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation : {escapeValue: true},
  lng: "ba",
  resources: {
    ba:{
      global: global_ba
    },
    en:{
      global: global_en
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
