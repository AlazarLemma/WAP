window.onload = () => {
  let begin;
  let end;
  let timeSet;
  let speed = 250;
  let fontselect=document.getElementById("fontsize")
  const selectIteam = document.getElementById("animation");
  const areaText = document.getElementById("text-area");
  begin = document.getElementById("start");
  end = document.getElementById("stop");
  let turboCheckbox = document.getElementById("turbo");
    let animationType = ANIMATIONS[selectIteam.value];


   document.getElementById('start').onclick=function(){
    begin.disabled = true;
    end.disabled = false;
    beginAnim();
  };
  document.getElementById('stop').onclick=function(){
    begin.disabled=false;
    end.disabled-true;
    clearInterval(timeSet);
  
  };
  turboCheckbox.onchange = function(){
    if(turboCheckbox.checked){
        speed = 50;
    }else{
        speed = 250;
    }
};

  fontselect.onchange = function(){
    let val = fontselect.value;
    switch(val){
        case "7":
            txtArea.style.fontSize = "7pt";
            break;
        case "10":
            txtArea.style.fontSize = "12pt";
            break;
        case "12":
            txtArea.style.fontSize = "10pt";
            break;
        case "16":
            txtArea.style.fontSize = "16pt";
            break;
        case "24":
            txtArea.style.fontSize = "24pt";
            break;
        case "32":
            txtArea.style.fontSize = "32pt";
            break;
    }


};

  selectIteam.onchange = function () {
    let val = selectIteam.value;
    switch (val) {
      case "Exercise":
        areaText.value = ANIMATIONS.EXERCISE;
        break;
      case "Juggler":
        areaText.value = ANIMATIONS.JUGGLER;
        break;
      case "Bike":
        areaText.value = ANIMATIONS.BIKE;
        break;
      case "Dive":
        areaText.value = ANIMATIONS.DIVE;
        break;
      default:
        areaText.value = ANIMATIONS.BLANK;
        break;
    }
  
    animationType = ANIMATIONS[val];
    clearInterval(timeSet);
    begin.disabled = false;
    end.disabled = true;
  };
  const beginAnim = () => {
      let valueFrame=0;
    timeSet = setInterval(() => {
        if(valueFrame == animationType.split("=====\n").length){
            valueFrame = 0;
        }
        Fream(valueFrame);
        valueFrame++;
    }, speed);

  };

  const Fream=(x)=>{
 
    txt = document.getElementById("text-area");    
    moviePixels = animationType.split("=====\n");
    txt.value = moviePixels[x];
  }
};