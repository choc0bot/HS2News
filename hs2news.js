javascript:function replaceText(){
var orignalstring = document.getElementById("page").innerHTML;
var newstring = orignalstring.split("http://www.heraldsun").join("http://www.news");
var localstring = newstring.split("href=\"/").join("href=\"http://www.news.com.au/");
document.getElementById("page").innerHTML = localstring;
}replaceText()