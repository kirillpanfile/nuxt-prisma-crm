import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
    }],
    'ts/no-namespace': 'off',
    'no-restricted-globals': 'off',
  },
})
