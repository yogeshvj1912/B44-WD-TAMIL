//e.Print the country which uses US Dollars as currency.

    var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(this.response);
    console.log(result);
    for (i=0;i<result.length;i++){
      if(result[i].currencies.USD)
       {
           console.log(result[i].name.common)
       }
   
    } 
 let dollers =result.filter((ele)=>{
     if(ele.currencies.USD){
         console.log(ele.name.common)
     }
 })

}