var strVar="";
strVar += "<!DOCTYPE html>";
strVar += "<html>";
strVar += "<head lang=\"en\">";
strVar += "    <meta charset=\"UTF-8\">";
strVar += "    <title>index<\/title>";
strVar += "    <script src=\"\/yourScript.js\" defer><\/script>";
strVar += "<\/head>";
strVar += "<body>";
strVar += "    <div id=\"outerDiv\">";
strVar += "        <div";
strVar += "    class=\"first\">";
strVar += "            <div><div>hello<\/div><\/div>";
strVar += "        <\/div>";
strVar += "        <div>hi<div><\/div><\/div>";
strVar += "        <div>I am a div<\/div>";
strVar += "    <\/div>";
strVar += "<\/body>";
strVar += "<\/html>";

function countDivs(html){
    return html.match(/<div>|<div\s/g).length;
}

var matches = countDivs(strVar);
console.log(matches);