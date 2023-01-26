var x=document.cookie;
if(document.cookie.length==0)
{
  $("h1").hide().fadeIn(2000);
  document.cookie="uservisit=logic;expires=Fri, 5 Aug 2023 01:00:00 UTC;";
setTimeout(()=>alert(document.cookie),5000);
}
