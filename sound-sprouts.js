
function handleResize() {
   var w = document.documentElement.clientWidth;
   console.log("resize", w);

   if (w < 1200) {
      console.log("Resize Detected and removing animation divs");
      var divs = document.querySelectorAll("#destTop div, #destBot div");
      for (var i=0; i < divs.length; i++) {
         divs[i].remove();
      }

      var ps = document.querySelectorAll("#destTop p, #destBot p");
      for (var i=0; i < ps.length; i++) {
         ps[i].classList.remove("hide");
         ps[i].classList.add("show");
      }

      document.getElementById("destTop").removeAttribute("style");
      document.getElementById("destBot").removeAttribute("style");


      console.log("removing resize event listener");
      window.removeEventListener('resize', handleResize);
   }
}


document.addEventListener('DOMContentLoaded', function(event) {
   var width = document.documentElement.clientWidth;
   console.log("width", width);
   if (width < 1200) {
      console.log("Screen is too thin for animation code.");
      return;
   }

   // Only create animated divs if the screen allows for it.
   console.log("Creating divs for animation.");
   createDivsFromSlogan("destTop");
   createDivsFromSlogan("destBot");

   document.querySelector("#destTop p").classList.add("hide");
   document.querySelector("#destBot p").classList.add("hide");

   animateSlogan("destTop", 3000);
   animateSlogan("destBot", 5500);

   window.addEventListener("resize", handleResize);
});


function createDivsFromSlogan(id)
{
   var element = document.getElementById(id);
   var text = element.innerText;

   element.style.height = element.clientHeight;
   element.style.width  = element.clientWidth;
   element.style.position = "relative";
   element.style.zIndex = 9999;

   p = document.querySelectorAll("#" + id + " p");
   p.innerText = "";

   for (var i=0; i < text.length; i++) {
      var ch = text[i];
      if (ch == " ") {
         ch = "&nbsp";
      }
      var e = document.createElement("div");
      e.innerHTML = ch;
      e.classList.add("letter");
      element.appendChild(e);
   }
}

function animateSlogan(id, speed)
{
   var letters = document.querySelectorAll("#" + id + " div");
   var left=0;

   if (id == "destBot") {
      left = Math.floor(letters[0].clientWidth / 2);
   }

   for (let i = 0; i < letters.length; i++) {

      letters[i].animate(
         [
            {
               top: Math.floor(Math.random() * 300)-150 + "px",
               left: Math.floor(Math.random() * 900)-100 + "px",
               transform: "rotate(0deg)"
            },
            {
               top: "0px",
               left: left + "px",
               transform: "rotate(360deg)"
            },
         ],
         { 
            fill:"both",
            delay:0,
            duration: speed, 
            easing: 'ease-in-out',
            iterations: 1, 
            // fill: ''
         }
      );
      speed = speed + 100;
      left += letters[i].clientWidth;
   };

}
