var username = localStorage.getItem("username");
var localVisits = sessionStorage.getItem("localVisits");
var totalVisits = localStorage.getItem("totalVisits");

if(username == null || username == ""){
    username = prompt("Please enter your name");
    localStorage.setItem("username",username);
}

if(localVisits == null){
    localVisits = 1;
    sessionStorage.setItem("localVisits",localVisits);
} else {
    localVisits++;
    sessionStorage.setItem("localVisits",localVisits);
}

if(totalVisits == null){
    totalVisits = 1;
    localStorage.setItem("totalVisits",totalVisits);
} else {
    totalVisits++;
    localStorage.setItem("totalVisits",totalVisits);
}

document.getElementById("username").innerText = "Hello "+username;
document.getElementById("sessionVisits").innerText = "session visits: "+localVisits;
document.getElementById("totalVisits").innerText = "total visits: "+totalVisits;
