function LifeInWeeks(age){
    var years=90-age;
    var days= years*365;
    var Weeks = years*52;
    var months=years*12;
    console.log("You have "+days+" days ,"+Weeks+" Weeks and "+months+" months left");

}

LifeInWeeks(20);