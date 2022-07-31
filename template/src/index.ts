const main = (): void => {
  console.log('this is my template');
}

declare let global: any
global.main = main
