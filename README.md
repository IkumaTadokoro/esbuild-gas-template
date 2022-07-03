# Google Apps Script Template powered by esbuild

Starter template for Google App Script development in local.

![image](https://user-images.githubusercontent.com/61409641/177019057-5a26dbdc-6668-4e38-aa28-45423f9935ef.png)

## How to use

GitHub Template [Create a repo from this template on GitHub](https://github.com/IkumaTadokoro/esbuild-gas-template/generate)

1. Fix the project_id in `.clasp.json` to your GAS project.

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./dist"
}
```

2. Write your code with TypeScript and any npm libraries with ESM styles.

- Google Apps Script requires executable function to be registered globally.
- In this template, the `main` function of `index.ts` is registered globally, so if you need a single function, you can write the process you want to execute from GAS here(Functions, not registered globally, are treated as private).
- If you want to register multiple executable functions, do not forget to register them in global!

```typescript
import { sum } from './utils'

const main = (): void => {
  Logger.log(sum(12, 20))
}

const sub = (): void => {
  Logger.log(sum(32, 28))
}

declare let global: any
global.main = main
global.sub = sub // Can be called directly from Google Apps Script as `sub`
```

3. Compile & transpile your scripts with esbuild.

```bash
# `bundle.js` are output to the `dist` directory
npm run build
```

4. (First time only) Copy `src/appsscript.json` to the `dist` directory. See the [Known Issues](https://github.com/IkumaTadokoro/esbuild-gas-template#known-issues-pr-welcome)

5. Push your scripts to Google Apps Script with clasp.

```bash
# Upload and open your scripts.
npm run deploy
```

## Known Issues (PR Welcome)

- The clasp requires `appsscript.json`(manifest of Google Apps Script) to be included in the `dist`, but it is not automated (I haven't figured out how to do it automatically with esbuild).
