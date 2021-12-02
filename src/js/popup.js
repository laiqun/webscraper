import "../css/popup.css"

if(navigator.platform.indexOf("Linux") > -1  )
	document.querySelectorAll(".open-web-scraper")[0].classList.add("linux");
else if (navigator.platform.indexOf("Mac") > -1 )
	document.querySelectorAll(".open-web-scraper")[0].classList.add("mac");
else if(navigator.platform.indexOf("Win") > -1 )
	document.querySelectorAll(".open-web-scraper")[0].classList.add("windows"); 
else
	document.querySelectorAll(".open-web-scraper")[0].classList.add("other");

if(1 === Math.round(Math.random()) ) 
	document.querySelector(".btn-primary.test-a").classList.remove("hide");
else
	document.querySelector(".btn-primary.test-b").classList.remove("hide");
