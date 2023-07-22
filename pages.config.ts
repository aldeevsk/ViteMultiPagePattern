import { resolve } from "path";

const __dirname = resolve()

export default [
    {name: 'index', path: resolve(__dirname, 'src/pages/index.html')},
    {name: 'shop', path: resolve(__dirname, 'src/pages/shop.html')},
    {name: 'about', path: resolve(__dirname, 'src/pages/about.html')},
    {name: 'contact', path: resolve(__dirname, 'src/pages/contact.html')},
]