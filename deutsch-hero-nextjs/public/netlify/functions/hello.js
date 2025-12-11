// netlify/functions/hello.js

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: "Hallo Abbas 😎 الباك اند شغّال!"
    })
  };
};
