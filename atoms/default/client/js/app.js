import { $, $$, wait } from "shared/js/util";



$$(".gv-nav").forEach((el) => {
    
    el.addEventListener("click", function(e){
        let target = e.target;
        let anchor = target.getAttribute("data-anchor");
        scrollTo(anchor);       
    });
  });

  $$('.section').forEach(section => {

    let anchor = section.getAttribute("data-anchor");
    let jumpTo = section.querySelector(".gv-jumpto");
    if (jumpTo != null && jumpTo != undefined) {
        jumpTo.value = anchor;
    }
  
    });


  $$('.gv-jumpto').forEach(jumpTo => {

    jumpTo.addEventListener("change", function( e ) {
    
    
    //console.log(e.target.value);
    scrollTo( e.target.value );
    
    }, false );
    
    });


    function scrollTo(anchor) {

        const jumpto = $(".section-" + anchor);
        const yOffset = -10;
        const y = jumpto.getBoundingClientRect().top + window.pageYOffset + yOffset;

        //window.scrollTo({top: y, behavior: 'smooth'});

        scrollToSmoothly(y, 500);
        //window.scrollTo(0, y);

    }




    function scrollToSmoothly(pos, time){
      /*Time is exact amount of time the scrolling will take (in milliseconds)*/
      /*Pos is the y-position to scroll to (in pixels)*/
      /*Code written by hev1*/
      if(typeof pos!== "number"){
      pos = parseFloat(pos);
      }
      if(isNaN(pos)){
       console.warn("Position must be a number or a numeric String.");
       throw "Position must be a number";
      }
      if(pos<0||time<0){
      return;
      }
      var currentPos = window.scrollY || window.screenTop;
        var start = null;
      time = time || 500;
      window.requestAnimationFrame(function step(currentTime){
        start = !start? currentTime: start;
        if(currentPos<pos){
        var progress = currentTime - start;
        window.scrollTo(0, ((pos-currentPos)*progress/time)+currentPos);
        if(progress < time){
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
        } else {
         var progress = currentTime - start;
        window.scrollTo(0, currentPos-((currentPos-pos)*progress/time));
        if(progress < time){
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
        }
      });
    }




  




