import type { ButtonVariants } from '../components/ui/button'
import { defineNuxtComponent } from '#app'
import { h } from 'vue'
import BaseButton from '../components/ui/button/BaseButton.vue'

function renderActionButton(slot: string, action: (...args: any[]) => void, variant?: ButtonVariants['variant']) {
  return h(defineNuxtComponent({
    components: { BaseButton },
    render: () => h(BaseButton, { onClick: action, variant, size: 'sm' }, { default: () => slot }),
  }))
}

export function useDatatable() {
  return {
    renderActionButton,
  }
}
