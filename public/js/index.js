const icon=document.getElementById('aniIco');
const inputField=document.getElementById("inputField");
const subBtn=document.getElementById("subBtn");
const cityName=document.getElementById("cityName");
const vis=document.getElementsByClassName('vis');
const condition=document.getElementsByClassName("condition");
console.log(condition);
console.log(vis[0]);
console.log(vis[1]);
const temp=document.getElementById("temp");
const feelsLike=document.getElementById("feelslike");
const humidity=document.getElementById("humidity");
const Visibility=document.getElementById("Visibility");
const main=document.getElementById("main");
const temper=async()=>
{
   let cityValue=inputField.value;
   if(cityValue===""){
       alert("Please enter city Name");
   }
   else
   {
       inputField.value="";
       try
       {
       let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=d56651b6014c435d7a27c5d20e07a217`;
       const weatherDataJson= await fetch(url);
       const weatherData=await weatherDataJson.json();
       const weatherArr=[weatherData];
       vis[0].style. visibility= "visible";
       vis[1].style. visibility= "visible";
       cityName.innerHTML=weatherArr[0].name;
       temp.innerHTML=weatherArr[0].main.temp;
       console.log(weatherArr[0].weather[0].main);
       if(weatherArr[0].weather[0].main==='Clear')
       {
           condition[1].className="fas fa-sun condition";
           condition[0].className="fas fa-sun condition font__design";
        console.log(condition.className);
       }
       else if(weatherArr[0].weather[0].main==='Haze')
       {
        condition[1].className="fa fa-smog condition";
        condition[0].className="fa fa-smog condition font__design";
       }
       else if(weatherArr[0].weather[0].main==='Rain')
       {
        condition[1].className="fa fa-cloud-showers-heavy condition";
        condition[0].className="fa fa-cloud-showers-heavy condition font__design";
       }
       else
       {
           condition[1].className="fa fa-cloud condition";
           condition[0].className="fa fa-cloud condition font__design";
       }
       main.innerHTML=weatherArr[0].weather[0].main;
       feelsLike.innerHTML=weatherArr[0].main.feels_like;
       humidity.innerHTML=weatherArr[0].main.humidity;
       Visibility.innerHTML=weatherArr[0].visibility;
       }
    
       catch
       {
           alert('Please enter the city name correctly');
       }
   }
}
subBtn.addEventListener('click',temper);

