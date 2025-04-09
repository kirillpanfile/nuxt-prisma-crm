<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const content = defineModel<string>()

const editorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  },
  placeholder: 'Write your privacy policy content here...',
}

// Handle image upload
function handleImageUpload(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      resolve(e.target?.result)
    }
    reader.readAsDataURL(file)
  })
}

onMounted(() => {
  const quill = document.querySelector('.ql-editor')
  if (quill) {
    quill.addEventListener('drop', async (e: DragEvent) => {
      const files = e.dataTransfer?.files
      if (files?.length) {
        e.preventDefault()
        const file = files[0]
        const dataUrl = await handleImageUpload(file)
        const range = editor.value?.getSelection()
        editor.value?.insertEmbed(range?.index || 0, 'image', dataUrl)
      }
    })
  }
})

</script>

<template>
  <!-- Rich Text Editor -->

  <ClientOnly>
    <QuillEditor v-model:content="content" :options="editorOptions" content-type="html" theme="snow" toolbar="full"
      class="!h-[150px]" />
  </ClientOnly>
</template>

<!-- <style lang="postcss">
@layer base{
  .ql-toolbar {
    @apply !border-gray-300 dark:!border-gray-700 !bg-gray-50 dark:!bg-gray-900;
  }
  
  .ql-container {
    @apply !border-gray-300 dark:!border-gray-700;
  }
  
  .ql-editor {
    @apply !text-gray-900 dark:!text-white;
  }
  
  .ql-snow.ql-toolbar button,
  .ql-snow .ql-toolbar button {
    @apply dark:!text-gray-400 dark:hover:!text-white;
  }
  
  .ql-snow .ql-stroke {
    @apply dark:!stroke-gray-400;
  }
  
  .ql-snow .ql-fill {
    @apply dark:!fill-gray-400;
  }
  
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke {
    @apply dark:!stroke-white;
  }
  
  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill {
    @apply dark:!fill-white;
  }
}
</style> -->
