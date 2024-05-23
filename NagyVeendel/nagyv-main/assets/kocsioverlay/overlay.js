function kocsiopenmustang() {
    document.getElementById("hoveroverlaymustang").style.width = "60vw";
    document.getElementById("fulloverlay").style.width = "100%";
    document.getElementById("kocsik01").style.opacity = "1";
  }
  
  function kocsiclosemustang() {
    document.getElementById("hoveroverlaymustang").style.width = "0%";
    document.getElementById("fulloverlay").style.width = "0%";
    document.getElementById("kocsik01").style.opacity = "0";
  }


  function kocsiopenpuma() {
    document.getElementById("hoveroverlaypuma").style.width = "60vw";
    document.getElementById("fulloverlay").style.width = "100%";
    document.getElementById("kocsik02").style.opacity = "1";
  }
  
  function kocsiclosepuma() {
    document.getElementById("hoveroverlaypuma").style.width = "0%";
    document.getElementById("fulloverlay").style.width = "0%";
    document.getElementById("kocsik02").style.opacity = "0";
  }


  function kocsiopenfiesta() {
    document.getElementById("hoveroverlayfiesta").style.width = "60vw";
    document.getElementById("fulloverlay").style.width = "100%";
    document.getElementById("kocsik03").style.opacity = "1";
  }
  
  function kocsiclosefiesta() {
    document.getElementById("hoveroverlayfiesta").style.width = "0%";
    document.getElementById("fulloverlay").style.width = "0%";
    document.getElementById("kocsik03").style.opacity = "0";
  }

  function kocsiopenfocus() {
    document.getElementById("hoveroverlayfocus").style.width = "60vw";
    document.getElementById("fulloverlay").style.width = "100%";
    document.getElementById("kocsik04").style.opacity = "1";
    }
  
  function kocsiclosefocus() {
    document.getElementById("hoveroverlayfocus").style.width = "0%";
    document.getElementById("fulloverlay").style.width = "0%";
    document.getElementById("kocsik04").style.opacity = "0";
  }

function startanimation(element) {
  element.classList.add("fulloverlay1");
  element.addEventListener( "animationend",  function() {
    element.classList.remove("fulloverlay1");  	
  } );
}
