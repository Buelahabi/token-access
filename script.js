var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(data[i].name);
    for(var i=0;i<data.length;i++){
            console.log(data[i].capital);
            for(var i=0;i<data.length;i++){
                console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
    }
}
}
}
var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);
    console.log(data);

    for(var i in data){
        try{
            var name=data[i].name;
            var lang=data[i].latlng;
            if(lang.length === 0) throw new Error("Longitude not found ");
            wd(name,...lang);
        }catch(e){
           console.log("invalid coordinates"+name+" "+e.message);
        }
    }
    // data.forEach(ele=>console.log(`${ele.name}-${ele.latlng[0]},${ele.latlng[1]}`));
}

function wd(name,lat,lon){
// console.log(name);
// console.log(lat);
// console.log(lon);
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4143e5fb4b6f3574b8d9537961e4ae8d`;
var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);
}
}
