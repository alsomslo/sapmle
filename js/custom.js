const lenis = new Lenis({
    duration: 5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.fromTo(
    "#text-anim",
    {
        y: 500,
    },
    {
        y: 0,
        duration: 1.5,
        ease: Power3.easeInOut,
        delay: 0.1,
    }

);

gsap.fromTo(
    ".ta_01",
    {
        y: 500,
    },
    {
        y: 0,
        duration: 1.5,
        ease: Power3.easeInOut,
        delay: 0.3,
    }

);
// gsap.fromTo(
//     "#text-anim .ta_02",
//     {
//         y: 500,
//     },
//     {
//         y: 0,
//         duration: 2.5,
//         ease: Power3.easeInOut,
//         delay: 0.5,
//     }

// );

const section1 = gsap.timeline();
section1.to("#section1 .parallax__item__img", { scale: 3 })
    .to("#section1 .parallax__item__img", { autoAlpha: 0.3 })

ScrollTrigger.create({
    animation: section1,
    trigger: "#section1",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1
});





$('.has-mask-fill').each(function () {
    var words = $(this).text();
    var total = words;
    $(this).empty();
    $(this).append($("<span /> ").text(words));
});

var hasMaskFill = gsap.utils.toArray('.has-mask-fill');
hasMaskFill.forEach(function (hMaskFill) {
    var spanFillMask = hMaskFill.querySelectorAll("span");
    gsap.to(spanFillMask, {
        scrollTrigger: {
            trigger: ".sec01_text",
            start: "top 90%",
            end: () => `+=${hMaskFill.offsetHeight * 3} `,
            scrub: 1,
        },
        duration: 150,
        backgroundSize: "200% 100%",
        stagger: 0.5,
        ease: Linear.easeNone,
    });

});


const an15 = gsap.timeline();
gsap.to("sec01_text ", {
    ease: "linear",
    scrollTrigger: {
        ease: "linear",
        trigger: "sec01_text",
        start: "bottom center",
        end: "+=1000",
        markers: false,
        pin: true,

        scrub: 3,
    }
})








// const ani5 = gsap.timeline();
// ani5.from("#pin_01 .t1", { x: innerWidth * 1 })
//     .from("#pin_01 .t2", { x: innerWidth * -1 })

// ScrollTrigger.create({
//     animation: ani5,
//     trigger: "#pin_01",
//     start: "top top",
//     end: "+=200",
//     scrub: true,
//     pin: true,
//     markers: false,
//     anticipatePin: 1
// });






