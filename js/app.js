/* https://greensock.com/gsap */
TweenLite.set("#confetti", {perspective: 600});
TweenLite.set("img", {xPercent: "-50%", yPercent: "-50%"});

var total = 10;
var warpOne = document.getElementById("confettiOne"),
    warpTwo = document.getElementById("confettiTwo"),
    warpThree = document.getElementById("confettiThree"),
    warpFour = document.getElementById("confettiFour"),
    warpFive = document.getElementById("confettiFive"),
    w = window.innerWidth,
    h = window.innerHeight;

const createDot = (name, warp) => {
    for (let i = 0; i < total; i++) {
        var Div = document.createElement("div");
        TweenLite.set(Div, {
            attr: {class: name},
            x: R(0, w),
            y: R(-200, -150),
            z: R(-200, 200),
        });
        warp.appendChild(Div);
        animm(Div);
    }
};

createDot("dot__one", warpOne);
createDot("dot__two", warpTwo);
createDot("dot__three", warpThree);
createDot("dot__four", warpFour);
createDot("dot__five", warpFive);

function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
    });
    TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
    });
    TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
    });
}

function R(min, max) {
    return min + Math.random() * (max - min);
}

/* https://mattboldt.com/typed.js/ */
var typed = new Typed("#text", {
    strings: [
        "Да, неожиданно. Возможно, ты на меня злишься. Но всему есть объяснение. Хотя сейчас не об этом. Пускай мы не общались пару лет, я естественно не забыла про тебя. Мне неизвестно, что происходит в твоей жизни. Но надеюсь, ты окружена людьми, которые всегда тебя поймут и поддержат. Желаю, чтобы ты достигла всего, чего хочешь и, конечно же, здоровья и счастья.",
    ],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function () {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    },
});
