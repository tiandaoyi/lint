module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:vue/strongly-recommended',
    'prettier', // eslint-config-prettier的标准用法，必须放在最后一个，用于关闭和eslint冲突规则
  ],
  plugins: ['simple-import-sort', 'prettier'],
  // plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['error'],
    // 'react/display-name': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // 'react/prop-types': 'off',
    // 'react-hooks/exhaustive-deps': 'off', // <--- THIS IS THE NEW RULE
    // '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
    'vue/require-v-for-key': 'error', // 需要v-bind:key用v-for指令
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ], // 禁止在与v-for相同的元素上使用v-if 请用计算属性代替
    'vue/no-unused-components': 'warn', // 禁止出现未使用过的组件
    'vue/require-valid-default-prop': 'error', // 强制props默认值有效
    'vue/valid-v-for': 'error', // 检查每个v-for指令是否有效 【自定义组件使用v-for,则必须加 :key标注】
    'vue/no-side-effects-in-computed-properties': 'error', // 禁止在计算属性中直接修改data中的属性(可以调用方法书写逻辑)
    'vue/return-in-computed-property': 'error', // 强制在计算属性中存在return语句
  },
};
