document.getElementId("lg").addEventListener("click", myfunlogin);
document.getElementById("si").addEventListener("click", myfunsignin);
function myfunlogin()
{
console.log("Logged in");
alert("Logged In successfully");
}
function myfunsignin()
{
window.location.href ="signin.html" ;
}
