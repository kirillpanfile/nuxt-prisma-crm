export function serializeFormData(formData: { key: any, value: any }) {
  const data = Object.assign({}, ...Object.values(formData).map(item => ({ [item.key]: item.value })))
}
