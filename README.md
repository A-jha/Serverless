# Serverless

We will use netlify-cli to setup a dev environment.

## Setup Netlift

1. Create a file with name netlify.toml file the code inside this file will tell netlify the info about function and extra setup

2. Create a direcory named as functions and the all serverless function will go there

3. inside netlify.toml file

```toml
[build]
functions = './functions'
```

- this tells netlify to watch root and look for function directory

4. Sort the url

- short the url instead of using '/.netlify/functions/functionName'
  now we can use '/api/functionName/'

```toml
[[redirects]]
from = '/api/*'
status = 200
to = '/.netlify/functions/:splat'
```

# Lets Learn concepts one by one

## 1. First function

```js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "here we can pass string only",
  };
};
```

Now to visit the reponse of this function run the netlif dev server

```
npm run netlify
```

then visit http://localhist:8888/.netlify/functions/1-hello

## 2. How to return Array or complex data

To return complex data we have to convert that complex data into string and there is a method for that

- JSON.stringify(complexdata)

```js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

const items = [{ name: "Avinash" }, { name: "Arpta" }];
```

- this case Our array will be converted into json data and shown in the bowser
- if you have json viewer in browser than you can see that

## 3.
