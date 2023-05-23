//express 사용 및 path 선언
const express = require('express')
const path = require('path')
const html = require('html')

const bodyparser=require('body-parser')
const foodinfo=require('./api_open/api_food')

const app = express()
//경로 설정
app.use(bodyparser.urlencoded({extended:true}))
const port=process.env.PORT||3000 //다른 포트로 입장시 3000번 포트로 입장

const publicdir=path.join(__dirname, '../open_api')
const fooddir=path.join(__dirname, '../open_api/food.html')
const chartinfo=path.join(__dirname, '../open_api/chartinfo.html')
app.use(express.static(publicdir)) 


//기본 입장 화면
app.use(express.static("open_api"));

app.get('/', function (req, res) {
  res.render('index', {
    이름:'종합 건강 관리 사이트'
  })
})
//식품 이름 입력시 이동
app.post('/food', (req, res)=>{
  fooddata(req.body.foodinfo, (error, {food}={})=>{
      if(error){
        return res.send({error})
      }
      return res.render('food',{
        foodname: foodinfo['list'][0]['DESC_KOR']
      })
    })
})
//차트 클릭시 이동
app.get('/chart', function(req, res){
  res.send('건강 관리 차트 정리');
})

app.listen(port, () => {
    console.log('server is up and running at port ${port}')
})
