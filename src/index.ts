import { sum } from './utils'

const main = (): void => {
  Logger.log(sum(12, 20))
}

declare let global: any
global.main = main
