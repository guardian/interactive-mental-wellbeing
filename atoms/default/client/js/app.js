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
        window.scrollTo({top: y, behavior: 'smooth'});

    }




  




