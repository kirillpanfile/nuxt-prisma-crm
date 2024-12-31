<script lang="ts" setup>
import { createDynamicFormData } from '../../../helpers/createDynamicFormData'
import { useEventDataRequests } from '../../../hooks/useEventDataRequests'
import { currentActiveModal, useModals } from '../../../hooks/useModals'
import { usePageMetadata } from '../../../hooks/usePageMetadata'
import BaseButton from '../button/BaseButton.vue'
import BaseInput from '../input/BaseInput.vue'
import BaseModal from './BaseModal.vue'

const { currentAppInstance } = usePageMetadata()
const { createNewEntity } = useEventDataRequests()
const { closeModal } = useModals()

const {
  mutateAsync,
} = createNewEntity(currentAppInstance.value?.model as string)

const formData = reactive({
  ...createDynamicFormData(),
})

const formIsValid = shallowRef(false)

function submitForm() {
  const transformedData = Object.assign({}, ...Object.values(formData).map(item => ({ [item.key]: item.value })))

  mutateAsync(transformedData)

  closeModal()
}

watch(formData, () => {
  const transformedData = Object.assign({}, ...Object.values(formData).map(item => item.required && ({ [item.key]: item.value })))
  formIsValid.value = Object.values(transformedData).every(value => value !== '')
})
</script>

<template>
  <base-modal :open="currentActiveModal === 'create'">
    <template #title>
      <p>Create new entry</p>
    </template>
    <template v-if="Object.keys(formData).length" #content>
      <base-input v-for="(item, index) in formData" :key="index" v-model="item.value" :placeholder="item.key" :type="item.type" :required="item.required" :label="item.key" />
    </template>

    <template #footer-close>
      <base-button :variant="!formIsValid ? 'secondary' : 'default'" :disabled="!formIsValid" @click="submitForm">
        Create
      </base-button>
    </template>
  </base-modal>
</template>

<style>

</style>
