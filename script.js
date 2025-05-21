// gsap.to(".fred", {
//   x: 500,
//   duration: 2,
//   y: 200,
//   rotation: 360,
//   scale: 3,
//   backgroundColor: "red",
//   width: 200,
// });

// gsap.from(".fred", {
//   x: 500,
//   duration: 2,
//   y: 200,
//   rotation: 360,
//   scale: 3,
//   backgroundColor: "red",
//   width: 200,
// });

// gsap.fromTo(
//   ".fred",
//   {
//     x: 500,
//     duration: 2,
//     y: 200,
//     scale: 3,
//     backgroundColor: "red",
//     width: 200,
//   },
//   {
//     x: 100,
//     y: 100,
//     rotation: 360,
//     duration: 5,
//     scale: 1,
//     width: 100,
//   }
// );

// gsap.to(".fred", {
//   x: 500,
//   duration: 2,
// });

// gsap.to(".bluefred", {
//   x: 500,
//   duration: 2,

//   delay: 2,

//   ease: "expo.in",
// });


let hoverAnimation = gsap.to(".hover-btn ", {
  scale: 1.2,
  duration: 0.5,
  paused: true,
  ease: "linear",
  backgroundColor: "red",


});

document.querySelector(".hover-btn").addEventListener("mouseenter", () => {
  hoverAnimation.play();
});

document.querySelector(".hover-btn").addEventListener("mouseleave", () => {
  hoverAnimation.reverse();
});