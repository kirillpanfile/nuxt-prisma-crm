import type { WatchStopHandle } from 'vue'

let stopWatch: WatchStopHandle | null = null

export default function useColorMode() {
  const colorMode = useCookie('colorMode', {
    default: () => 'auto',
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
