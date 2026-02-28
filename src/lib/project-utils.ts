/** Pick first non-dark color from palette as accent (for buttons, chips, etc.) */
export function getPaletteAccent(palette: string[]): string | null {
  if (!palette?.length) return null
  const accent = palette.find(h => {
    const r = parseInt(h.slice(1, 3), 16) / 255
    const g = parseInt(h.slice(3, 5), 16) / 255
    const b = parseInt(h.slice(5, 7), 16) / 255
    const l = 0.299 * r + 0.587 * g + 0.114 * b
    return l > 0.2
  })
  return accent ?? palette[palette.length - 1]
}

/** Hex color with alpha (0-1). Returns 8-digit hex e.g. #A8C97F26 */
export function hexWithAlpha(hex: string, alpha: number): string {
  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')
  return `${hex}${a}`
}

/** Whether a hex color is dark (needs light text for contrast) */
export function isColorDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const l = 0.299 * r + 0.587 * g + 0.114 * b
  return l < 0.5
}

/** Lighten a hex color by mixing with white. amount 0–1 (e.g. 0.1 = 10% lighter) */
export function lightenHex(hex: string, amount: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const mix = (c: number) => Math.round(c * (1 - amount) + 255 * amount)
  return `#${mix(r).toString(16).padStart(2, '0')}${mix(g).toString(16).padStart(2, '0')}${mix(b).toString(16).padStart(2, '0')}`
}
