// netlify/functions/placement-de-ar.js

// 1) هون حط محتوى ملف JSON تبعك ككائن JavaScript عادي
// يعني بدل ... حط النص اللي نسخته من placement-de-ar.json
const placementData = {
  // الصق محتوى ملف JSON هنا بالضبط
  // مثلاً:
  // "questions": [ ... ]
};

// 2) هذا هو الــ Backend function
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(placementData)
  };
};
