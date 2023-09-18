const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);






// const ani4 = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".sec01_text h2", {
//     backgroundPositionX: "0%",
//     stagger: 30,
//     scrollTrigger: {
//         trigger: ".sec01_text h2",
//         scrub: 1,
//         start: "top center",
//         end: "bottom top",
//         markers: false,
//         end: "+=300"

//     }

// });
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




gsap.registerPlugin(ScrollTrigger);

const SLIDE_CONTAINER = ".slide-container";
const SLIDE = ".slide";
const SLIDES = gsap.utils.toArray(SLIDE);
const FIGURE = ".figure";

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
    const images = col.childNodes;

    // DUPLICATE IMAGES FOR LOOP
    images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
    });

    // SET ANIMATION
    images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

        gsap.to(item, {
            y: direction + Number(columnHeight / 2),
            duration: 20,
            repeat: -1,
            ease: "none",
            modifiers: {
                y: gsap.utils.unitize((y) => {
                    if (direction == "+=") {
                        offset += additionalY.val;
                        y = (parseFloat(y) - offset) % (columnHeight * 0.5);
                    } else {
                        offset += additionalY.val;
                        y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
                    }

                    return y;
                })
            }
        });
    });
});

const imagesScrollerTrigger = ScrollTrigger.create({
    trigger: "section",
    start: "top 50%",
    end: "bottom 50%",
    onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
            if (additionalYAnim) additionalYAnim.kill();
            additionalY.val = -velocity / 2000;
            additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
            if (additionalYAnim) additionalYAnim.kill();
            additionalY.val = -velocity / 3000;
            additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
    }
});






/* Copyright (c) 2020 by Craig Roblewsky (https://codepen.io/PointC/pen/KRWgOK) for code used below */
//const svg = document.querySelector("#overlay");
const ratio = 0.5625;

function newSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if (w > h * (16 / 9)) {
        gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
    } else {
        gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
    }
    //let data = svg.getBoundingClientRect();
    //gsap.set("#overlay", {x:w/2 - data.width/2});
    //gsap.set("#overlay", {y:h/2 - data.height/2});
}

SLIDES.forEach((slide, i) => {
    const img = slide.querySelector(".figure");
    const text = slide.querySelector(".text");
    const heading = slide.querySelector(".heading");

    const tl = gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            pin: true,
            start: "top top",
            end: "+=" + SLIDES.length * 100 + "% bottom"
        }
    });

    fadeImage(heading, img);
});

function fadeImage(trigger, img) {
    const fi = gsap.to(img, {
        scrollTrigger: {
            trigger: trigger,
            markers: true,
            scrub: true,
            start: "bottom bottom",
            end: "top center"
            //onEnter: () => onPin(img),
            //onLeaveBack: () => onLeave(img)
        },
        opacity: 1
    });
}

function onPin(element) {
    gsap.to(element, {
        opacity: 1,
        duration: 0.5
    });
}

function onLeave(element) {
    gsap.to(element, {
        opacity: 0,
        duration: 0.5
    });
}


const pages = gsap.utils.toArray('.page');

gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: '#h_scroll',
        end: '+=5000', // 스크롤량을 늘여줌.
        scrub: 0,
        pin: true,
        //snap: 1 / (pages.length - 1),//scrub: 0일 경우 작동하지 않음
    }
})



// var swiper = new Swiper(".mySwiper", {

//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });







// newSize();
// window.addEventListener("resize", newSize);













