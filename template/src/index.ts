const main = (): void => {
  console.log('this is my template');
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare let global: any
global.main = main
