const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section1 = gsap.timeline();
section1.to("#section1 .parallax__item__img", { scale: 3 })
    .to("#section1 .parallax__item__img", { autoAlpha: 0.1 })

ScrollTrigger.create({
    animation: section1,
    trigger: "#section1",
    start: "top top",
    end: "+=800",
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
            trigger: ".has-mask-fill",
            start: "top 90%",
            end: () => `+=${hMaskFill.offsetHeight * 2}`,
            scrub: 1,
        },
        duration: 1,
        backgroundSize: "200% 100%",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});








const ani5 = gsap.timeline();
ani5.from("#pin_01 .t1", { x: innerWidth * 1 })
    .from("#pin_01 .t2", { x: innerWidth * -1 })

ScrollTrigger.create({
    animation: ani5,
    trigger: "#pin_01",
    start: "top top",
    end: "+=200",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1
});





