document.addEventListener('DOMContentLoaded', function(event) {
  animateSlogan(
    "Because sounds lead to words",
    "destTop", 3000);

  animateSlogan(
    "and words lead to sentences.",
    "destBot", 5500);
});

function animateSlogan(slogan, target, speed)
{
  var left=0;
  var dest = document.getElementById(target);

  slogan.split("").forEach(function(letter) { 

    if (letter == " ") {
      letter = "&nbsp;"
      speed = speed + 500;
    }

    var e = document.createElement("div");
    e.innerHTML = letter;
    e.style.position = "absolute";
    e.classList.add('letter');
    dest.appendChild(e); 

    e.animate(
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
        delay:500,
        duration: speed,        // number in ms [this would be equiv of your speed].
        easing: 'ease-in-out',
        iterations: 1,         // infinity or a number.
        // fill: ''
      }

    );

    left = left + e.offsetWidth + 5;
  });

}
