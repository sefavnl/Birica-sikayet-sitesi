$(document).ready(function(){

    //Swipe speed:
    var tolerance = 100; //px.
    var speed = 650; //ms.
  
    //Elements:
    var interactiveElements = $('input, button, a');
    var itemsLength = $('.panel').length;
    var active = 1;
  
    //Background images:
    for (i=1; i<=itemsLength; i++){
      var $layer = $(".panel:nth-child("+i+")");
      var bgImg = $layer.attr("data-img");
      $layer.css({
        "background": "url("+bgImg+") no-repeat center / cover"
      });
    };
  
    //Transitions:
    setTimeout(function() {
      $(".panel").css({
        "transition": "cubic-bezier(.4,.95,.5,1.5) "+speed+"ms"
      });
    }, 200);
  
    //Presets:
    $(".panel:not(:first)").addClass("right");
  
    //Swipe:
    function swipeScreen() {
      $('.swipe').on('mousedown touchstart', function(e) {
  
        var touch = e.originalEvent.touches;
        var start = touch ? touch[0].pageX : e.pageX;
        var difference;
  
        $(this).on('mousemove touchmove', function(e) {
          var contact = e.originalEvent.touches,
          end = contact ? contact[0].pageX : e.pageX;
          difference = end-start;
        });
  
        //On touch end:
        $(window).one('mouseup touchend', function(e) {
          e.preventDefault();
  
          //Swipe right:
          if (active < itemsLength && difference < -tolerance) {
            $(".panel:nth-child("+active+")").addClass("left");
            $(".panel:nth-child("+(active+1)+")").removeClass("right");
            active += 1;
            btnDisable();
          };
  
          // Swipe left:
          if (active > 1 && difference > tolerance) {
            $(".panel:nth-child("+(active-1)+")").removeClass("left");
            $(".panel:nth-child("+active+")").addClass("right");
            active -= 1;
            btnDisable();
          };
  
          $('.swipe').off('mousemove touchmove');
        });
  
      });
    };
    swipeScreen();
  
    //Prevent swipe on interactive elements:
    interactiveElements.on('touchstart touchend touchup', function(e) {
      e.stopPropagation();
    });
  
    //Buttons:
    $(".btn-prev").click(function(){
      // Swipe left:
      if (active > 1) {
        $(".panel:nth-child("+(active-1)+")").removeClass("left");
        $(".panel:nth-child("+active+")").addClass("right");
        active -= 1;
        btnDisable();
      };
    });
  
    $(".btn-next").click(function(){
      //Swipe right:
      if (active < itemsLength) {
        $(".panel:nth-child("+active+")").addClass("left");
        $(".panel:nth-child("+(active+1)+")").removeClass("right");
        active += 1;
        btnDisable();
      };
    });
  
    function btnDisable() {
      if (active >= itemsLength) {
        $(".btn-next").prop("disabled", true);
        $(".btn-prev").prop("disabled", false);
      }
      else if (active <= 1) {
        $(".btn-prev").prop("disabled", true);
        $(".btn-next").prop("disabled", false);
      }
      else {
        $(".btn-prev, .btn-next").prop("disabled", false);
      };
    };
  
  });
  const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');

openButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
});
const form = document.getElementById('modal');
const container = document.getElementById('info-container');

form.addEventListener('submit', e => {
  alert('Ricanız eklendi.');
  e.preventDefault();
  const name = document.getElementById('name').value;
  const baska = document.getElementById('baska').value;
  const info = document.getElementById('info').value;
  // Bilgi kartı oluşturun
  const infoElement = document.createElement('div');

  infoElement.classList.add('info');
  const nameElement = document.createElement('h4');
  nameElement.textContent = name;
  const baskaElement = document.createElement('h5');
  baskaElement.textContent = baska;
  const infoContent = document.createElement('p');
  infoContent.textContent = info;  
  const button = document.createElement('button');
  button.innerHTML = 'Sil';
  infoElement.appendChild(nameElement);
  infoElement.appendChild(baskaElement);
  infoElement.appendChild(infoContent);
  infoElement.appendChild(button);
  // Bilgi kartını container'a ekleyin
  container.appendChild(infoElement);
  button.addEventListener('click', function() {
    infoElement.parentNode.removeChild(infoElement);
  });
});
// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 80 ? value = 0 : value += 20
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 80 : value -= 20
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(start)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth/trail.length
    })
    
    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth/4)  ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
