<script lang="ts" setup>
import {
  Dialog as BaseDialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog'
</script>

<template>
  <base-dialog>
    <dialog-content>
      <dialog-header>
        <dialog-title>
          <slot name="title" />
        </dialog-title>
        <dialog-description>
          <slot name="title" />
        </dialog-description>
      </dialog-header>

      <slot name="content" />
      <dialog-footer>
        <slot name="footer" />
        <dialog-close><slot name="footer-close" /></dialog-close>
      </dialog-footer>
    </dialog-content>
  </base-dialog>
</template>
