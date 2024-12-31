<script lang="ts" setup>
import { createDynamicFormData } from '../../../helpers/createDynamicFormData'
import { useEventDataRequests } from '../../../hooks/useEventDataRequests'
import { currentActiveModal, useModals } from '../../../hooks/useModals'
import { usePageMetadata } from '../../../hooks/usePageMetadata'
import BaseButton from '../button/BaseButton.vue'
import BaseInput from '../input/BaseInput.vue'
import BaseModal from './BaseModal.vue'

const { currentAppInstance } = usePageMetadata()

const { closeModal, getModalState } = useModals()
const { updateEntity } = useEventDataRequests()
const {
  mutateAsync,
} = updateEntity(currentAppInstance.value?.model as string)

const modalState = getModalState('edit')
const formData = ref(createDynamicFormData(modalState))

const formIsValid = ref(true)

function submitForm() {
  const userId = modalState.value.id
  const transformedData = Object.assign({}, ...Object.values(formData.value).map(item => ({ [item.key]: item.value })))

  mutateAsync({ id: userId, ...transformedData })
  closeModal()
}

watch(modalState, () => {
  formData.value = createDynamicFormData(modalState)
})

watchEffect(() => {
  const transformedData = Object.assign({}, ...Object.values(formData.value).map(item => item.required && ({ [item.key]: item.value })))
  formIsValid.value = Object.values(transformedData).every(value => value !== '')
})
</script>

<template>
  <base-modal :open="currentActiveModal === 'edit'">
    <template #title>
      <p>Edit entry</p>
    </template>
    <template v-if="Object.keys(formData).length" #content>
      <base-input v-for="(item, index) in formData" :key="index" v-model="item.value" :placeholder="item.key" :type="item.type" :required="item.required" :label="item.key" />
    </template>

    <template #footer-close>
      <base-button :variant="!formIsValid ? 'secondary' : 'default'" :disabled="!formIsValid" @click="submitForm">
        Save
      </base-button>
    </template>
  </base-modal>
</template>
