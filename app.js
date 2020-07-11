var min=0;
var sec=0;
var msec=0;
var hour;
var headinghour=document.getElementById("hour");
var headingmin=document.getElementById("min");
var headingsec=document.getElementById("sec");
var headingmsec=document.getElementById("msec");
var interval;
function timer()
{
    msec++;
    headingmsec.innerHTML=msec;
    if(msec>100)
    {
        sec++;
        headingsec.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++;
        headingmin.innerHTML=min;
        sec=0;
    }
    else if(min>=60)
    {
       hour++;
       headinghour.innerHTML=hour;
       min=0;
    }
}
function start()
{
    interval=setInterval(timer,10);
    button= document.getElementById("btn");
    button.disabled=true;
}
function pause()
{
    clearInterval(interval);
    button.disabled=false;
    
}
function reset()
{
    msec=0;
    sec=0;
    min=0;
    hour=0;
    headingmsec.innerHTML=msec;
    headingsec.innerHTML=sec;
    headingmin.innerHTML=min;
    headinghour.innerHTML=hour;
    pause();
}
