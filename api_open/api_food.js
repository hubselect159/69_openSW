const request = require('reqeust')
const serviceKey= require('../keys/key')

const fooddata=(foodinfo, callback) => {
    var seviceKey=serviceKey.PublicPortalKey

    var xhr = new XMLHttpRequest();
    var url = 'https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=pdMHSPJsCpUe8zIlXXVhaDi8Rzdg%2BYvYcnT1OcekZmEPh4zvy8yajUMt%2BC7zUOR1K3kQ7s%2Fb2uXqp155GwjS1g%3D%3D&desc_kor=%EB%B0%94%EB%82%98%EB%82%98%EC%B9%A9&pageNo=1&numOfRows=3&bgn_year=2017&animal_plant=(%EC%9C%A0)%EB%8F%8C%EC%BD%94%EB%A6%AC%EC%95%84&type=xml'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; /*Service Key*/
    queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent('foodinfo'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('bgn_year') + '=' + encodeURIComponent('2017'); /**/
    queryParams += '&' + encodeURIComponent('animal_plant') + '=' + encodeURIComponent('(유)돌코리아'); /**/
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };

    xhr.send('');

    const fullurl=url+queryParams;

    request(fullurl,(error, {body})=>{
        const food=JSON.parse(body)
        callback(undefined,{
            food:food
        })
    })
    
}

module.export=fooddata;