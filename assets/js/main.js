//스크롤 부들럽게
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


window.onload = function () {
    $('body, html').animate({
        scrollTop: (0, 0)
    });
}

//Intro
const introTl = gsap.timeline({})
introTl.to('.preloader', {
    opacity: 0
})
introTl.from('.sc_intro .inner .intro_cont', {
    opacity: 0
})
//텍스트 애니메이션
introTl.from('.sc_intro .txt_wrap .letter1', 2, {
    //M
    yPercent: -100,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter2', 2, {
    //U
    xPercent: 100,
    yPercent: -300,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter3', 2, {
    //S
    xPercent: 50,
    yPercent: -50,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter4', 2, {
    //I
    yPercent: 100,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter5', 2, {
    //C
    xPercent: 700,
    yPercent: -100,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter7', 2, {
    //F
    yPercent: -100,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter8', 2, {
    //O
    xPercent: -80,
    yPercent: 300,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter9', 2, {
    //R
    // 움직임 없음
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter11', 2, {
    //E
    xPercent: -150,
    yPercent: -30,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter12', 2, {
    //V
    xPercent: -150,
    yPercent: 200,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter13', 2, {
    //E
    // 움직임 없음
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter14', 2, {
    //R
    xPercent: -150,
    yPercent: 200,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter15', 2, {
    //Y
    xPercent: 100,
    yPercent: 200,
}, 'a')

introTl.from('.sc_intro .txt_wrap .letter17', 2, {
    //O
    xPercent: -400,
    yPercent: -400,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter18', 2, {
    //N
    xPercent: 300,
    yPercent: -100,
}, 'a')
introTl.from('.sc_intro .txt_wrap .letter19', 2, {
    //E
    xPercent: -300,
    yPercent: -100,
}, 'a')

introTl.to('.sc_intro .intro_cont .txt_wrap', {
    color: '#fff',
    ease: 'none'
}, 'b')
introTl.to('.sc_intro .logo', {
    function () {
        $('.sc_intro .logo').addClass('on')
    }
},'b')
introTl.to('.sc_intro .intro_cont .txt_wrap', {
    y: 0,
})
introTl.to('.sc_intro .intro_bg .bg', {
    function () {
        $('.sc_intro .intro_bg .bg').addClass('on')
    }
})
introTl.to('.btn_link', {
    opacity: 1,
})

//typo
dreamTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_typo",
        start: "0% 100%",
        end: "=+100%",
        //  markers: false,
        scrub: 0,
    },
})

dreamTl.to('.sc_typo .stk_txt1 .txt_wrap', {
    xPercent: -100
}, 'a')
dreamTl.to('.sc_typo .stk_txt2 .txt_wrap ', {
    xPercent: 100
}, 'a')
dreamTl.to('.sc_typo .stk_txt3 .txt_wrap', {
    xPercent: -100
}, 'a')
dreamTl.to('.sc_typo .stk_txt4 .txt_wrap', {
    xPercent: 100
}, 'a')

//light
gsap.timeline()
    .to('.main_light', {
        xPercent: "random(0, 100)",
        yPercent: "random(0, 100)",
        duration: 2,
        ease: "none",
        repeat: -1,
        repeatRefresh: true
    })

//chat
gsap.to('.sc_favorite .fav_area .device .screen img', {
    scrollTrigger: {
        trigger: ".sc_favorite",
        start: "0% 0%",
        end: "0% -300%",
        //markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
    },
    yPercent: -15,
})
chatTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_favorite",
        start: "0% 50%",
        end: "0% 0%",
        scrub: 0,
        //markers: true,
    },
})
chatTl.to('.sc_favorite .txt_area .headline', {
    opacity: 1,
}, 'a')

chatTl.to('.sc_favorite .fav_area .device_wrap', {
    opacity: 1,
}, 'a')

//card
winW = window.innerWidth;
winH = window.innerHeight;
gsap.set('.sc_card .card_wrap', {
    clipPath: `circle(0px at ${winW}px ${winH/2}px)`
})
gsap.set(".sc_card .card_list .card:nth-child(1)", {
    xPercent: 100
})
gsap.set(".sc_card .card_list .card:nth-child(3)", {
    xPercent: -100
})
cardTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_card",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
    },
    defaults: {
        ease: "none"
    }
})
cardTl.to('.sc_card .card_wrap', 1, {
    clipPath: `circle(${winW+300}px at ${winW}px ${winH/2}px)`,
})
cardTl.from(".sc_card .inner .headline", {
    opacity: 0
})

cardTl.from(".sc_card .card_list .card:nth-child(1)", {
    yPercent: 200
})
cardTl.from(".sc_card .card_list .card:nth-child(2)", {
    yPercent: 200
})
cardTl.from(".sc_card .card_list .card:nth-child(3)", {
    yPercent: 200
})

cardTl.to(".sc_card .card_list .card:nth-child(1)", {
    xPercent: 0
}, 'a')
cardTl.to(".sc_card .card_list .card:nth-child(3)", {
    xPercent: 0
}, 'a')

cardTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sticky_section2",
        start: "0% 100%",
        end: "0% 10%",
        scrub: 0,
        //    markers: true,
    },
    defaults: {
        ease: "none"
    }
})
cardTl2.to('.card_list .card:nth-child(2)', {
    zIndex: '2'
})
cardTl2.to('.card_list .card:nth-child(2) .img', {
    scale: 3,
    yPercent: 200
})
cardTl2.to('.sc_card .btn_wrap', {
    transform: 'translateY(150%)',
})

//Soon
soonTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_soon .mask_area",
        start: "0% 100%",
        end: "100% 100%",
        // markers: false,
        scrub: 0,
    },
})
soonTl.to('.sc_soon .mask_area .mask img', {
    yPercent: -20,
})

//app
gsap.set('.sc_app .app_wrap', {
    clipPath: `circle(0px at ${winW}px ${winH/2}px)`
})

appTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_app",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
    },
    defaults: {
        ease: "none"
    }
})

appTl.to('.app_wrap', 2, {
    clipPath: `circle(${winW+300}px at ${winW}px ${winH/2}px)`,
    visibility: 'visible',
})
appTl.from(".sc_app .inner .headline", {
    opacity: 0
})
appTl.to('.sc_app .app_list li:nth-child(1)', {
    opacity: 1,
    y: 0,
})
appTl.to('.sc_app .app_list li:nth-child(2)', {
    opacity: 1,
    y: 0,
})
appTl.to('.sc_app .app_list li:nth-child(3)', {
    opacity: 1,
    y: 0,
})
appTl.to('.sc_app .app_list li:nth-child(4)', {
    opacity: 1,
    y: 0,
})

//wait
gsap.to('.sc_wait .btn_wrap', 2, {
    scrollTrigger: {
        trigger: ".sc_wait",
        start: "50% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 0,
        invalidateOnRefresh: true,
        ease: 'none'
    },
    transform: 'translateY(0)',
})
