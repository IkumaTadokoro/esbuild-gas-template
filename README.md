# Google Apps Script Template powered by esbuild

Starter template for Google App Script development in local.

![image](https://user-images.githubusercontent.com/61409641/177019057-5a26dbdc-6668-4e38-aa28-45423f9935ef.png)

## How to use

### Preparations(First time only)

1. Install clasp

```bash
npm install -g clasp
```

2. Login Google

```bash
clasp login
```

3. `npm install`

### Setup Project

GitHub Template [Create a repo from this template on GitHub](https://github.com/IkumaTadokoro/esbuild-gas-template/generate)

1. Create your project

```bash
npm run gen -name=<YOUR_PROJECT>
# ex) npm run gen -name=sample-project
# Above command creates app/sample-project with template
```

2. Fix the project_id in `app/<YOUR_PROJECT>/.clasp.json` to your GAS project.

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./dist"
}
```

3. Write your code with TypeScript and any npm libraries with ESM styles.

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

- If you want to create reusable function, you should write and import `lib/src/*.ts`

4. Compile & transpile your scripts with esbuild.

```bash
npm run -w <YOUR_PROJECT> build
# or
cd app/<YOUR_PROJECT>
npm run build
```

5. Push your scripts to Google Apps Script with clasp.

```bash
cd app/<YOUR_PROJECT>
clasp push
# open project in browser
clasp open
```
