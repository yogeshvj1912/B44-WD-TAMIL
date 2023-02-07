//c.Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    result.forEach((ele)=>{
        console.log(`NAME : ${ele.name.common} - CAPITAL : ${ele.capital} - FLAG : ${ele.flags.svg}`);
    })
}
