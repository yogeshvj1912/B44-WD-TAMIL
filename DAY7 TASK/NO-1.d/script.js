//d.Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var result1=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(result1);
};