const timeline = gsap.timeline();

timeline
  .to(".startOne", { opacity: 1, duration: 0.5 })
  .to(".startOne", { opacity: 0, duration: 0.5 })
  .to(".startTwo", { opacity: 1, duration: 0.5 })
  .to(".startTwo", { opacity: 0, duration: 0.5 })
  .to(".startThree", { opacity: 1, duration: 0.5 })
  .to(".startThree", { opacity: 0, duration: 0.5 })
  .to(".startFour", { opacity: 1, duration: 0.5 })
  .to(".startFour", { opacity: 0, duration: 0.5 })
  .to(".startFive", { opacity: 1, duration: 0.5 })
  .to(".startFive", { opacity: 0, duration: 0.5 })
  .to(".startSix", { opacity: 1, duration: 0.5 })
  .to(".startSix", { opacity: 0, duration: 0.5 })
  .to(".startSeven", { opacity: 1, duration: 0.5 })
  .to(".startSeven", { opacity: 0, duration: 0.5 })
  .to(".startEight", { opacity: 1, duration: 0.5 })
  .to(".startEight", { opacity: 0, duration: 0.5 })
  .to(".startNine", { opacity: 1, duration: 0.5 })
  .to(".startNine", { opacity: 0, duration: 0.5 })
  .to(".startTen", { opacity: 1, duration: 0.5 });
