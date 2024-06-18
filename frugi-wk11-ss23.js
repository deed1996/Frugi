var animateHTMLIn = function() {
    var e, i;
    function t() {
        (e = document.querySelectorAll('.frugi--fade-in--hidden')), (i = window.innerHeight), window.addEventListener('scroll', o), window.addEventListener('resize', t), o();
    }
    function o() {
        for (var t = 0; t < e.length; t++) {
            e[t].getBoundingClientRect().top - i <= 0 && (e[t].className = e[t].className.replace('frugi--fade-in--hidden', 'frugi--fade-in'));
        }
    }
    return { init: t };
};
animateHTMLIn().init();

var animateHTMLRight = function() {
    var e, i;
    function t() {
        (e = document.querySelectorAll('.frugi--fade-right--hidden')), (i = window.innerHeight), window.addEventListener('scroll', o), window.addEventListener('resize', t), o();
    }
    function o() {
        for (var t = 0; t < e.length; t++) {
            e[t].getBoundingClientRect().top - i <= 0 && (e[t].className = e[t].className.replace('frugi--fade-right--hidden', 'frugi--fade-right'));
        }
    }
    return { init: t };
};
animateHTMLRight().init();

var animateHTMLDown = function() {
    var e, i;
    function t() {
        (e = document.querySelectorAll('.frugi--fade-down--hidden')), (i = window.innerHeight), window.addEventListener('scroll', o), window.addEventListener('resize', t), o();
    }
    function o() {
        for (var t = 0; t < e.length; t++) {
            e[t].getBoundingClientRect().top - i <= 0 && (e[t].className = e[t].className.replace('frugi--fade-down--hidden', 'frugi--fade-down'));
        }
    }
    return { init: t };
};
animateHTMLDown().init();

var animateHTMLLeft = function() {
    var e, i;
    function t() {
        (e = document.querySelectorAll('.frugi--fade-left--hidden')), (i = window.innerHeight), window.addEventListener('scroll', o), window.addEventListener('resize', t), o();
    }
    function o() {
        for (var t = 0; t < e.length; t++) {
            e[t].getBoundingClientRect().top - i <= 0 && (e[t].className = e[t].className.replace('frugi--fade-left--hidden', 'frugi--fade-left'));
        }
    }
    return { init: t };
};
animateHTMLLeft().init();
