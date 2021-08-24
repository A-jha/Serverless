//domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "<details><summary>Our First Netlify example</summary><p> Where we are getting data from 1-hello.js</p></details>",
  };
};
