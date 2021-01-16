/* eslint-disable consistent-return */
/* eslint-disable func-names */
module.exports = function (req, res, next) {

  if (
    req.method === 'GET' &&
    req.originalUrl === '/customer-api/browser/retrieve'
  ) {

    return res.jsonp({
        "stockMarketData": [   
            {
                "stockSymbol": "TEA",
                "type": "Common",
                "lastDividend": 0,
                "fixedDividend": 0,
                "parValue": 100
            },
            {
                "stockSymbol": "POP",
                "type": "Common",
                "lastDividend": 8,
                "fixedDividend": 0,
                "parValue": 100 
            },
            {
                "stockSymbol": "ALE",
                "type": "Common",
                "lastDividend": 23,
                "fixedDividend": 0,
                "parValue": 60
            },
            {
                "stockSymbol": "GIN",
                "type": "Preferred",
                "lastDividend": 8,
                "fixedDividend": 2,
                "parValue": 100 
            },
            {
                "stockSymbol": "JOE",
                "type": "Common",
                "lastDividend": 13,
                "fixedDividend": 0,
                "parValue": 250 
            }
        ]
    });
  }

  if(
    req.method === 'POST' && 
    req._parsedUrl.pathname === '/customer-api/browser/dividendyield'
    ) {
      let dividendYieldValue = {}
      if(req.query.stockSymbol !== undefined && req.query.stockSymbol !== 'GIN') {
        dividendYieldValue = {
          "symbol": req.query.stockSymbol,
          "stockPrice": req.body.stockPrice,
          "dividendYield": 0
        }
      } else if (req.query.stockSymbol !== undefined && req.query.stockSymbol === 'GIN') {
        dividendYieldValue = {
          "symbol": req.query.stockSymbol,
          "stockPrice": req.body.stockPrice,
          "dividendYield": 0
        }
      }
      return res.status(200).jsonp(dividendYieldValue);
  }

  if (
    req.method === 'POST' &&
    req.originalUrl === '/customer-api/browser/dividendyield'
  ) {
    return res.status(200).jsonp({
      "symbol": "GIN",
      "stockPrice": 200,
      "dividendYield": 1
    });
  }

  next();
};
