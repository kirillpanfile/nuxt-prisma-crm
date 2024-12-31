export type ModalNames = 'create' | 'edit'

export const currentActiveModal: Ref<ModalNames | null> = ref(null)

function openModal(modal: ModalNames, data?: any) {
  currentActiveModal.value = modal
  if (data) {
    useState(modal).value = data
  }
}

export function useModals() {
  return {
    openModal,
    closeModal: () => currentActiveModal.value = null,
    getModalState: (stateName: string) => useState(stateName),
  }
}
