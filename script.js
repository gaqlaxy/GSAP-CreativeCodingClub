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

gsap.fromTo(
  ".fred",
  {
    x: 500,
    duration: 2,
    y: 200,
    rotation: 360,
    scale: 3,
    backgroundColor: "red",
    width: 200,
  },
  {
    x: 100,
    y: 100,
    duration: 5,
    scale: 1,
    width: 100,
  }
);
