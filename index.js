const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('건강 관리 종합 사이트')
})

app.listen(3000)

app.get('/', function(요청, 응답){
  응답.send('건강관련 사이트입니다');
})

app.get('/food', function(요청, 응답){
  응답.send('식품 영양 확인');
})

app.get('/chart', function(요청, 응답){
  응답.send('건강 관리 차트 정리');
})