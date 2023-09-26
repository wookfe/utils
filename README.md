# wook_utils

### 目录结构

- `src` 开发目录，存放工具函数
- `.npmrc` npm 配置
- `.release-it.json` release-it 配置

### 开发

1. `src` 目录下增加工具函数
2. `index.ts` 导出
3. `commit` 代码，不需要 `push`，发布时会自动 `push` 到 `github`

### 发布

1. 执行 `yarn release` 会做两件事

- 打包，打包为 `commonjs` 和 `esm` 产物对应 `lib` `esm` 目录
- 发布，利用 `realease-it` 自动发布到 `npm` (`token`维护在 `.npmrc` 文件)，自动打 `tag` ，生成 `changelog` 变更日志

### 相关连接

- [release-it](https://github.com/release-it/release-it)
- [npm docs](https://docs.npmjs.com/)
