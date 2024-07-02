## typescript+Express
- npm init
- npm i typescript/npm i -D typescript
- tsc --init  -> tsconfig.json
- in the tsconfig.json file uncomment `outDir` and mention the name of folder where we want to keep compiled js file
- uncomment ` "noImplicitAny": true, `and ` "strictNullChecks": true, `
- include ` "exclude" : [node_modules]`
- include ` "include" : [src/**/*.ts]`

- `npm i express`
  when we will try to import express it will throw error, because we are imporing express without types in a `.ts file`

- to deal with it we will install `npm i -D @types/express`, so that our express files will get have their types.

- to start the project add following scripts in package.json
"scripts": {
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx concurrently \"npm run watch\" \"npm start\" "
},