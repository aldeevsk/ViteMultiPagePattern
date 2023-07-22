import { increase, decrease } from './assets/ts/counter'

document.querySelector('#inc')?.addEventListener('click', increase)
document.querySelector('#dec')?.addEventListener('click', decrease)