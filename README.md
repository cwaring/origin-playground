<img src='./src/assets/origin-logo.svg' width='128' height='128' alt='origin' />

# Origin

_The fast web3 application toolkit ⚡️_

**Example instance of origin 0.3-beta.x app structure**

See: https://github.com/application-research/origin for more info and features.

### Getting started
```sh
# init a local repo
npx degit application-research/origin-playground origin-app
```

### Development

```bash
# 0: install deps
npm i
# 1: start development mode
npm start
```

```bash
# production build /dist
npm run build
```

```bash
# preview production build /dist
npm run preview
```
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Vue devtools (beta)](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

This combo enables IDE support for [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) which is included in Vue > v3.1.4. However, be sure to disable Vetur if you have it installed as these extensions conflict.

### Type Support For `.vue` Imports in TS

If you are using Volar the default configuration included in Origin enables prop types for `.vue` imports. To enable Volar takeover mode you will need to follow [some additional steps](https://github.com/johnsoncodehk/volar/discussions/471).