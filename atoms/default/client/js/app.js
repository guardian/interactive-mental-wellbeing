import { $, $$, wait } from "shared/js/util";



$$(".gv-nav").forEach((el) => {
    
    el.addEventListener("click", function(e){
        const target = e.target;
        const anchor = target.getAttribute("data-anchor");
        const jumpto = $(".section-" + anchor);
        const yOffset = -10;
        const y = jumpto.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    });
  });




  




