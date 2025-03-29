import type { WatchStopHandle } from 'vue'

let stopWatch: WatchStopHandle | null = null

export default function useColorMode() {
  const colorMode = useCookie('colorMode', {
    default: () => 'auto',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })

  const syncColorMode = () => useHead({ htmlAttrs: { 'data-mode': colorMode.value } })

  if (stopWatch) {
    stopWatch()
  }

  stopWatch = watch(colorMode, syncColorMode)

  return {
    colorMode,
    syncColorMode,
  }
}
