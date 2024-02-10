
function handleResize() {
   if (document.documentElement.clientWidth < 1200) {
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
      window.removeEventListener('resize', handleResize);
   }
}

document.addEventListener('DOMContentLoaded', function(event) {

   if (document.getElementsByClassName("ven-diagram").length != 1) {
      return;
   }

   window.addEventListener("resize", function(event) {
      if (document.documentElement.clientWidth <= 1000) {
         document.getElementById("left-circle").classList.remove("left-circle-animation");
         document.getElementById("right-circle").classList.remove("right-circle-animation");
         document.getElementById("center-of-diagram").classList.remove("center-of-diagram-animation");
      }
   });

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            if (document.documentElement.clientWidth > 1000) {
               document.getElementById("left-circle").classList.add("left-circle-animation");
               document.getElementById("right-circle").classList.add("right-circle-animation");
               document.getElementById("center-of-diagram").classList.add("center-of-diagram-animation");

               document.querySelector("#left-circle div:nth-child(2)").classList.add("shift-left-small");
               document.querySelector("#left-circle div:nth-child(3)").classList.add("shift-left-big");
               document.querySelector("#left-circle div:nth-child(4)").classList.add("shift-left-small");

               document.querySelector("#right-circle div:nth-child(2)").classList.add("shift-right-small");
               document.querySelector("#right-circle div:nth-child(3)").classList.add("shift-right-big");
               document.querySelector("#right-circle div:nth-child(4)").classList.add("shift-right-big");
               document.querySelector("#right-circle div:nth-child(5)").classList.add("shift-right-small");
            }
         }
      });
   });
   observer.observe(document.querySelector('#center-of-diagram'));
});

document.addEventListener('DOMContentLoaded', function(event) {

   if (document.documentElement.clientWidth < 1200) {
      return;
   }

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
