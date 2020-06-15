import store from '../store'

export default function(value, currency = 'UZS') {
  const locale = store.getters.info.locale || 'uz-UZ'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value)
}
