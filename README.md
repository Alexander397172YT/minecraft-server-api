## Installation
```cmd
npm install minecraft-server-api
```
## Getting Started
Make sure you have installed the latest stable version of [Node.js](https://nodejs.org/en/)
### Using CommonJS
```js
const status = require('minecraft-server-api')

status('www.example.com', 25565, callback => {
    console.log(callback)
})
```
___
##### If you find a bug or a flaw, then write to me in Discord `Alexander39#7172`