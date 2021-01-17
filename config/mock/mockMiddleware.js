/* eslint-disable consistent-return */
/* eslint-disable func-names */
module.exports = function (req, res, next) {

  if (
    req.method === 'GET' &&
    req.originalUrl === '/customer-api/browser/stock'
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
    req._parsedUrl.pathname === '/customer-api/browser/stock/yield'
    ) {
      return res.status(200).jsonp({
          "stockSymbol": req.body.stockSymbol,
          "stockPrice": req.body.stockPrice,
          "value": 30
      });
  }

  if(
    req.method === 'POST' && 
    req._parsedUrl.pathname === '/customer-api/browser/stock/peratio'
    ) {
      return res.status(200).jsonp({
          "stockSymbol": req.body.stockSymbol,
          "stockPrice": req.body.stockPrice,
          "value": 120
      });
  }

  if(
    req.method === 'POST' && 
    req._parsedUrl.pathname === '/customer-api/browser/stock/vwprice'
    ) {
      return res.status(200).jsonp({
          "stockSymbol": req.body.stockSymbol,
          "vwprice": 10
      });
  }
  
  if (
    req.method === 'POST' &&
    req.originalUrl === '/customer-api/browser/stock/trade'
  ) {
    return res.status(201).jsonp({
      "sharesQuantity": 10, 
      "symbol": "TEA", 
      "tradePrice": 10, 
      "tradeType": "buy",
      "createdAt": new Date()
    });
  }

  if (
    req.method === 'GET' &&
    req.originalUrl === '/customer-api/browser/stock/trade'
  ) {
    return res.status(200).jsonp({
      "trade": [
        {
          "sharesQuantity": 10, 
          "symbol": "TEA", 
          "tradePrice": 10, 
          "tradeType": "buy",
          "createdAt": new Date()
        },
        {
          "sharesQuantity": 10, 
          "symbol": "TEA", 
          "tradePrice": 10, 
          "tradeType": "buy",
          "createdAt": new Date()
        },
        {
          "sharesQuantity": 10, 
          "symbol": "TEA", 
          "tradePrice": 10, 
          "tradeType": "buy",
          "createdAt": new Date()
        }
      ]
    });
  }

  if (
    req.method === 'GET' &&
    req.originalUrl === '/customer-api/browser/stock/gbce'
  ) {
    return res.status(200).jsonp({"gbce": 100.00});
  }

  next();
};
