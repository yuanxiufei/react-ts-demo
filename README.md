# react-ts-demo

这是一个使用 TypeScript 和 React 开发的低代码项目。

## 项目创建步骤

1. 创建项目

```bash
npx create-react-app react-ts-demo --template typescript
cd react-ts-demo
```

2. 安装开发依赖

```bash
# ESLint相关依赖
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jest

# Prettier相关依赖
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# Git提交规范相关依赖
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional
```

3. 安装项目依赖

```bash
# 测试相关依赖
npm install @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event

# React相关依赖
npm install react react-dom

# TypeScript相关依赖
npm install typescript @types/node @types/react @types/react-dom @types/jest
```

## 项目配置

项目已配置以下功能：

- TypeScript 支持
- ESLint 代码检查
- Prettier 代码格式化
- Husky Git提交钩子
- Commitlint 提交信息规范
- Jest 单元测试

### ESLint 配置

1. 创建 `.eslintrc.js` 配置文件：

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

### Prettier 配置

1. 创建 `.prettierrc.js` 配置文件：

```js
module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'auto',
};
```

### Husky 配置

1. 初始化 Husky：

```bash
npm run prepare
```

2. 添加 Git 钩子：

```bash
npx husky add .husky/pre-commit "npm run lint && npm run format:check"
npx husky add .husky/commit-msg "npm run commitlint"
```

### Commitlint 配置

1. 创建 `commitlint.config.js` 配置文件：

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档
        'style', // 格式
        'refactor', // 重构
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
      ],
    ],
  },
};
```

提交信息格式：

```
<type>(<scope>): <subject>
```

示例：

```
feat(user): 添加用户登录功能
fix(auth): 修复token过期问题
```

## 可用的脚本命令

- `npm start` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm test` - 运行测试
- `npm run lint` - 运行 ESLint 检查
- `npm run lint:fix` - 运行 ESLint 检查并自动修复
- `npm run format` - 运行 Prettier 格式化代码
- `npm run format:check` - 检查代码格式是否符合 Prettier 规范
