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

## 3. Deploy the app

Deploy the application to netlify and use github repo so that for a change in the repo netlify wii start build .

## 4 . Access different apps to use our API

Setup headers

```js
 headers: {
      "Access-Control-Allow-Origin": "*",
    },
```

- basically this will allow all to fetch data

## 5. Setting Up AirTable Headless CMS

Airtable is a relational database tool that's also an online collaboration tool. Before you brush it off as boring because of the word database, know that Airtable is easy to use and extremely versatile. You can use it to manage work, track and organize inventories, plan an event, and [much more](https://airtable.com/).

- It has a generous free tear

- Airtable exposes our API key in not a good way so it is our duty to secure our API key.

## 6. [airtable-node](https://www.npmjs.com/package/airtable-node)

Node wrapper for Airtable API

-
