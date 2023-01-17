
var fullWidth = window.outerWidth;
var currentSideWidth = parseInt(document.getElementsByClassName("sidenav")[0].offsetWidth)+25;

document.getElementById("linkedin").addEventListener("click",function()
{
    window.open("https://www.linkedin.com/in/isaiah-freeman-3471b2211",target="_blank",rel="noopener noreferrer");
});

document.getElementById("github").addEventListener("click",function()
{
    window.open("https://github.com/KingTechnician/",target="_blank",rel="noopener noreferrer");
});

function responsiveLayout()
{
    document.querySelectorAll(".content").forEach(function(element)
    {
        //element.style.marginLeft =(currentSideWidth)+"px";
        //currentSideWidth = parseInt(element.style.marginLeft);
    })
}

$(document).ready(function()
{
    var changeLayout = setInterval("responsiveLayout()",10)
});



var selectionColors = ["#794242","#425a79"]

var primaryColor = "#6c7088"

var secondaryColor = "#4F4F51"
//#4F4F51 - 79, 79, 81

var nameArray = ["healthwhiz","nei","haro","priam","about","fwdemodel","visionsofchange","myresume","contact"]

var currentColor = undefined

var colorDictionary = {"healthwhiz":"#794242","nei":"#425a79","haro":"#5e4279","priam":"#384bb4","about":"#6c7088","fwdemodel":"#527942","visionsofchange":"#795042","myresume":"#794242","contact":"#a33b4a"}
//#794242 - 121, 66, 66
//#425a79 - 66, 90, 121
//#5e4279 - 94, 66, 121
//#384bb4 - 56, 75, 180
//#6c7088 - 108, 112, 136
//#527942 - 82, 121, 66
//var colorRGBDictionary = {"healthwhiz":{r:121,g:66,b:66},"nei":{r:66,g:90,b:121},"haro":{r:94,g:66,b:121},"priam":{r:56,g:75,b:180},"about":{r:108,g:112,b:136},"fwdemodel":{r:82,g:121,b:66}}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.background="linear-gradient(-90deg, "+primaryColor+", "+secondaryColor+")";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height="0%";
    document.getElementById("myNav").style.background="transparent";
  }


function prepareCollapseAnimation(className)
{
    var collapseElements = document.getElementsByClassName(className);

    for (var i = 0; i<collapseElements.length;i++)
    {
        var caretObject = collapseElements[i].children[0]
        collapseElements[i].addEventListener("click", function()
        {
            if(caretObject.style.transform!=="rotate(180deg)")
            {
                caretObject.style.transform="rotate(180deg)"
                caretObject.style.MozTransform="rotate(180deg)"
                caretObject.style.WebkitTransform="rotate(180deg)"
                caretObject.style.msTransform="rotate(180deg)"
            }
            else
            {
                caretObject.style.transform="";
                caretObject.style.MozTransform=""
                caretObject.style.WebkitTransform=""
                caretObject.style.msTransform=""
            }
        });
    }
}

var menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click",function()
{
    if(menuButton.style.transform!=="rotate(180deg)")
    {
        menuButton.style.transform="rotate(180deg)"
        menuButton.style.MozTransform="rotate(180deg)"
        menuButton.style.WebkitTransform="rotate(180deg)"
        menuButton.style.msTransform="rotate(180deg)"
        menuButton.style.transition="transform 0.2s"
    }
    else
    {
        menuButton.style.transform="";
        menuButton.style.MozTransform=""
        menuButton.style.WebkitTransform=""
        menuButton.style.msTransform=""
    }
});

function showContent(name)
{
  for (var i = 0; i < nameArray.length; i++)
  {
      if(name==nameArray[i])
      {
          document.getElementById(nameArray[i]).style.display = "block";
          document.querySelector("body").style.background="linear-gradient(-90deg, "+colorDictionary[nameArray[i]]+", "+secondaryColor+")";
          closeNav()
          document.getElementById("myNav").style.background="linear-gradient(-90deg, "+colorDictionary[nameArray[i]]+", "+secondaryColor+")";
          primaryColor = colorDictionary[nameArray[i]]
      }
      else
      {
        document.getElementById(nameArray[i]).style.display = "none";
        closeNav()
        document.getElementById("myNav").style.background="linear-gradient(-90deg, "+colorDictionary[nameArray[i]]+", "+secondaryColor+")";
      }
  }
}


prepareCollapseAnimation("projectCollapse");

prepareCollapseAnimation("researchCollapse");


/*    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg); */