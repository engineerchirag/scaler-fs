import express from 'express';

const loggerMiddleware = (req, res, next) => {
  const reqRes = {
    req: {
        url: req.url,
        body: req.body
    },
    res: {
        data: 'res.body'
    },
    time: Date.now()
  }
  console.log(reqRes);
  next();
}

export default loggerMiddleware;