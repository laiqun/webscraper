console.log("web crawler 2");

import {main}  from "./contentjs/main"
console.log(main);
let instance = new main();
instance.init();
//Add debug way
/*
document.addEventListener("keydown", (event) =>{
    //console.log(event);
    if(event.ctrlKey && event.keyCode == 90)//Ctrl + z
    {
        console.log("Ctrl + z pressed");
        console.log("Enter select mode");
        instance.selectSelector({parentCSSSelector: "", allowedElements: "*"});

    }
    if(event.shiftKey && event.keyCode == 90)//Ctrl + A
    {
        console.log("Shift + z pressed");
        console.log("Leave select mode");
    }
    if(event.ctrlKey && event.keyCode == 88)//Ctrl + x
    {
        console.log("Ctrl + x pressed");
        instance.elementPreview({parentCSSSelector: "", elementCSSSelector: "a[data-href='http://news.baidu.com/ns?tn=news&cl=2&rn=20&ct=1&fr=bks0000&ie=utf-8&word=']"});
        console.log("Enter preview mode");
    }
    if(event.shiftKey && event.keyCode == 88)//Shift + x
    {
        console.log("Shift + x pressed");
        console.log("Leave preview mode");
    }
});
*/
