import {  } from "module";
const crypto = require('crypto');
const express = require('express');
const app = express();
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');


const middlewareFunction = (request:any, response:any, next:any) => {
  let hash = crypto.createHash('sha256');
  if (request.headers['content-type'] !== 'application/json') {
      response.status(400).send('Server requires application/json')
  } else {
    next()
  }
}


app.use(middlewareFunction)

