export function formatDate(date: Date, locale = 'en-US') { return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date) }
