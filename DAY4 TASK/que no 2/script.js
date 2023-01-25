//Use the resst countries API URL->https://restcountries.eu/rest/v2/all and display all the country flags in the console

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(let i=0; i<result.length; i++){
        console.log(result[i].flag);
    }
}
