


gsap.registerPlugin(ScrollTrigger);

var $animeCard = document.querySelector(".sc2-card-inner");
//loader img
gsap.set($animeCard, {
    rotationY: 0,
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    width: "40vh",
    height: "40vh",
    scale: 1
});

//img set
gsap.set(".sc2-card-front img", {
    attr: { src: "./images/01hero.jpg" }
});
gsap.set(".sc2-card-back img", {
    attr: { src: "./images/03hero.jpg" }
});

//Main card-wrapper
gsap.set(".sc2-card", { x: "50%", y: "50%" });

// Main-text animation
//Main text load
gsap.set(".main-txt", { opacity: 0, yPercent: 50 });
const mainTxt = gsap.timeline();
mainTxt.to(".main-txt", { opacity: 1, yPercent: -50, duration: 2 });

//Main text opacity down
const mainTxt2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-txt",
        start: "center center",
        end: "+=50",
        markers: false,
        scrub: 1
    }
});
mainTxt2.to(".main-txt", { opacity: 0, ease: "linear" });

//loader to scale
const tl = gsap.timeline();
tl.to($animeCard, {
    rotationY: 0,
    ease: Expo.easeIn,
    duration: 2.5,
    scale: 1,
    width: "100vw",
    height: "100vh"
});

//Banner one image scale down
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner",
        start: "center center",
        end: "+=600",
        markers: false,
        scrub: 1
    }
});
if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t2.to($animeCard, {
        height: "60vh",
        width: "472.5px",
        left: "calc(243.75px + (50% - 585px) + 682.5px)"
    });
} else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t2.to($animeCard, {
        height: "60vh",
        width: "465px",
        left: "calc(240px + (50% - 480px) + 480px)"
    });
} else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t2.to($animeCard, {
        height: "60vh",
        width: "345px",
        left: "calc(180px + (50% - 360px) + 360px)"
    });
} else if (window.innerWidth <= 767) {
    t2.to($animeCard, {
        height: "calc(100vh - 340px)",
        width: "95%",
        left: "50%",
        top: "calc(100% - 40px)",
        yPercent: -100
    });
} else {
    t2.to($animeCard, {
        height: "60vh",
        width: "535px",
        left: "calc(275px + (50% - 660px) + 770px)"
    });
}

gsap.to(".main-wallpaper", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-wallpaper",
        start: "center+=" + 100 + " center",
        end: "bottom center",
        markers: false,
        scrub: 1
    }
});

//Banner text-animation
gsap.set(".banner-content", { opacity: 0, yPercent: 50 });
gsap.to(".banner-content", {
    ease: "linear",
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: ".banner",
        start: "center+=" + 300 + " center",
        end: "+=300",
        markers: false,
        scrub: 1
    }
});

//Banner animation
gsap.to(".banner", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".banner",
        start: "center center",
        end: "+=1500",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1
    }
});

//Banner two animation
gsap.to(".banner-two", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".banner-two",
        start: "center center",
        end: "+=1500",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1
    }
});

//Banner two image rotation
const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-two",
        start: "top center",
        end: "+=1500",
        markers: false,
        scrub: 1
    }
});
if (window.innerWidth <= 767) {
    t3.to($animeCard, {
        rotationY: -180,
        height: "100vh",
        width: "100vw",
        left: "50%",
        top: "50%",
        yPercent: -50
    });
} else {
    t3.to($animeCard, {
        rotationY: -180,
        height: "100vh",
        width: "100vw",
        left: "50%"
    });
}

//Banner three animation
gsap.to(".banner-three", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".banner-three",
        start: "center center",
        end: "+=1500",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1
    }
});

//Banner three image rotation
const t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-three",
        start: "top center",
        end: "+=1500",
        markers: false,
        scrub: 1
    }
});
if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t4.to($animeCard, {
        rotationY: -360,
        height: "60vh",
        width: "472.5px",
        left: "calc((50% - 585px) + 243.75px)"
    });
} else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t4.to($animeCard, {
        rotationY: -360,
        height: "60vh",
        width: "465px",
        left: "calc((50% - 465px) + 240px)"
    });
} else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t4.to($animeCard, {
        rotationY: -360,
        height: "60vh",
        width: "345px",
        left: "calc((50% - 360px) + 180px)"
    });
} else if (window.innerWidth <= 767) {
    t4.to($animeCard, {
        rotationY: -360,
        height: "calc(100vh - 340px)",
        width: "95%",
        left: "50%",
        top: "calc(100% - 40px)",
        yPercent: -100
    });
} else {
    t4.to($animeCard, {
        rotationY: -360,
        height: "60vh",
        width: "535px",
        left: "calc((50% - 660px) + 275px)"
    });
}

//Banner four animation
gsap.to(".banner-four", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".banner-four",
        start: "center center",
        end: "+=1500",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1
    }
});

//Banner four image rotation
const t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-four",
        start: "top center",
        end: "+=1500",
        markers: false,
        scrub: 1
    }
});
if (window.innerWidth <= 767) {
    t5.to($animeCard, {
        rotationY: -180,
        height: "100vh",
        width: "100vw",
        left: "50%",
        top: "50%",
        yPercent: -50
    });
} else {
    t5.to($animeCard, {
        rotationY: -180,
        height: "100vh",
        width: "100vw",
        left: "50%"
    });
}

// Main wrapper card
gsap.to(".sc2-card", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".sc2-card",
        start: "top top",
        end: "top bottom",
        endTrigger: ".slider-card ",
        markers: false,
        pin: true,
        pinSpacing: false,
        scrub: 1
    }
});

//slider-left img animation
gsap.set(".slider-left img:first-child", { xPercent: 50 });
gsap.set(".slider-left img:not(:first-child)", { xPercent: 100 });
gsap.to(".slider-left .img-1", {
    ease: "none",
    xPercent: -95,
    scale: 0.6,
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center+=" + 180 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-left .img-2", {
    ease: "none",
    xPercent: -70,
    scale: 0.7,
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center+=" + 360 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-left .img-3", {
    ease: "none",
    xPercent: -40,
    scale: 0.8,
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center+=" + 540 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-left .img-4", {
    ease: "none",
    xPercent: -10,
    scale: 0.9,
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center+=" + 720 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-left .img-5", {
    ease: "none",
    xPercent: 20,
    scale: 1,
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center+=" + 800 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});

// slider right img animation
gsap.set(".slider-right img:first-child", { xPercent: -50 });
gsap.set(".slider-right img:not(:first-child)", { xPercent: -100 });
gsap.to(".slider-right .img-1", {
    ease: "none",
    xPercent: 95,
    scale: 0.6,
    scrollTrigger: {
        trigger: ".slider-card ",
        start: "center+=" + 180 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-right .img-2", {
    ease: "none",
    xPercent: 70,
    scale: 0.7,
    scrollTrigger: {
        trigger: ".slider-card ",
        start: "center+=" + 360 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-right .img-3", {
    ease: "none",
    xPercent: 40,
    scale: 0.8,
    scrollTrigger: {
        trigger: ".slider-card ",
        start: "center+=" + 540 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-right .img-4", {
    ease: "none",
    xPercent: 10,
    scale: 0.9,
    scrollTrigger: {
        trigger: ".slider-card ",
        start: "center+=" + 720 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});
gsap.to(".slider-right .img-5", {
    ease: "none",
    xPercent: -20,
    scale: 1,
    scrollTrigger: {
        trigger: ".slider-card ",
        start: "center+=" + 800 + " center",
        end: "center+=" + 900 + " center",
        markers: false,
        scrub: 1
    }
});

//slider card
gsap.to(".slider-card", {
    ease: "linear",
    scrollTrigger: {
        trigger: ".slider-card",
        start: "center center",
        end: "+=1000",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1
    }
});

// image source changed
gsap.to(".sc2-card-front img", {
    attr: { src: "./images/01hero.jpg" },
    scrollTrigger: {
        trigger: ".banner-three",
        start: "top bottom",
        end: "top bottom",
        endTrigger: ".slider-card ",
        markers: false,
        scrub: 1
    }
});

gsap.to(".sc2-card-back img", {
    attr: { src: "./images/03hero.jpg" },
    scrollTrigger: {
        trigger: ".banner-four",
        start: "top bottom",
        end: "top bottom",
        endTrigger: ".slider-card ",
        markers: false,
        scrub: 1
    }
});

const pages = gsap.utils.toArray('.page');

const container = gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: '#h_scroll',
        end: '+=20000',
        scrub: 0,
        pin: true,


    }
});








// create any animation you want!
const horizontal = document.querySelector(".page");
gsap.from(".reveal_01", {
    duration: 0.7,
    opacity: 0,
    xPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".reveal_01",
        start: "+=1500",

        markers: false,
    }

});
gsap.from(".pb_01", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pb_01",
        start: "+=1200",
        markers: false,
    }
});

gsap.from(".pt_01", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pt_01",
        start: "+=1600",
        markers: false,
    }
});



gsap.from(".reveal_02", {
    duration: 0.7,
    opacity: 0,
    xPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".reveal_02",
        start: "+=4000",
        markers: true,
    }
});
gsap.from(".pb_02", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pb_02",
        start: "+=3800",
        markers: true,
    }
});

gsap.from(".pt_02", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pt_02",
        start: "+=4400",
        markers: true,
    }
});


gsap.from(".reveal_03", {
    duration: 0.7,
    opacity: 0,
    xPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".reveal_03",
        start: "+=7200",
        markers: true,
    }
});
gsap.from(".pb_03", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pb_03",
        start: "+=6900 ",
        markers: true,
    }
});

gsap.from(".pt_03", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pt_03",
        start: "+=7800",
        markers: true,
    }
});

gsap.from(".reveal_04", {
    duration: 0.7,
    opacity: 0,
    xPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".reveal_04",
        start: "+=10500",
        markers: true,
    }
});
gsap.from(".pb_04", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pb_04",
        start: "+=10000 ",
        markers: true,
    }
});

gsap.from(".pt_04", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pt_04",
        start: "+=10900 ",
        markers: true,
    }
});



gsap.from(".reveal_05", {
    duration: 0.7,
    opacity: 0,
    xPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".reveal_05",
        start: "+=14000",
        markers: true,
    }
});
gsap.from(".pb_05", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pb_05",
        start: "+=13800 ",
        markers: true,
    }
});

gsap.from(".pt_05", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".pt_05",
        start: "+=14700 ",
        markers: true,
    }
});





