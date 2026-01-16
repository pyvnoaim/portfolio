export function useFormatDate() {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en-US'

  return (timestamp?: string) => {
    if (!timestamp) return 'unknown date'
    const parsed = new Date(timestamp)
    if (Number.isNaN(parsed.valueOf())) return 'unknown date'

    return new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsed)
  }
}
