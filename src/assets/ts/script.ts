import { increase, decrease } from './counter'

document.querySelector('#inc')?.addEventListener('click', increase)
document.querySelector('#dec')?.addEventListener('click', decrease)