// index.ts
import { createI18n } from 'vue-i18n'
import zhCn from './zh-cn'
import en from './en'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        zhCn,
        en
    }
})
export default i18n
