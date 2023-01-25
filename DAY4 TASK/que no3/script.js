//3.Use the same rest countries and print all countries names, regions, sub-region and populations

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    result.forEach((ele)=>{
        console.log(`NAME : ${ele.name} - REGION : ${ele.region} - SUB REGION : ${ele.subregion} - POPULATIONS : ${ele.population}`);
    })
    }
