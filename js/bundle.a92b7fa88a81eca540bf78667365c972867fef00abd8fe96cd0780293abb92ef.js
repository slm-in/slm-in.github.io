/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-webpalpha-webplossless_webp_lossless-setclasses !*/
!function(A,e,n){function a(A){var e=u.className,n=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e+=" "+n+A.join(" "+n),c?u.className.baseVal=e:u.className=e)}function o(A,e){return typeof A===e}function s(){var A,e,n,a,s,t,r;for(var f in l)if(l.hasOwnProperty(f)){if(A=[],e=l[f],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)A.push(e.options.aliases[n].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,s=0;s<A.length;s++)t=A[s],r=t.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),i.push((a?"":"no-")+r.join("-"))}}function t(A,e){if("object"==typeof A)for(var n in A)f(A,n)&&t(n,A[n]);else{A=A.toLowerCase();var o=A.split("."),s=Modernizr[o[0]];if(2==o.length&&(s=s[o[1]]),"undefined"!=typeof s)return Modernizr;e="function"==typeof e?e():e,1==o.length?Modernizr[o[0]]=e:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=e),a([(e&&0!=e?"":"no-")+o.join("-")]),Modernizr._trigger(A,e)}return Modernizr}var i=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var n=this;setTimeout(function(){e(n[A])},0)},addTest:function(A,e,n){l.push({name:A,fn:e,options:n})},addAsyncTest:function(A){l.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var f,u=e.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;f=o(A,"undefined")||o(A.call,"undefined")?function(A,e){return e in A&&o(A.constructor.prototype[e],"undefined")}:function(e,n){return A.call(e,n)}}(),r._l={},r.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},r._trigger=function(A,e){if(this._l[A]){var n=this._l[A];setTimeout(function(){var A,a;for(A=0;A<n.length;A++)(a=n[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){r.addTest=t}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){t("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){t("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){function A(A,e,n){function a(e){var a=e&&"load"===e.type?1==o.width:!1,s="webp"===A;t(A,s&&a?new Boolean(a):a),n&&n(e)}var o=new Image;o.onerror=a,o.onload=a,o.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();A(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var a=0;a<e.length;a++)A(e[a].name,e[a].uri)})}),s(),a(i),delete r.addTest,delete r.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();A.Modernizr=Modernizr}(window,document);
;
var outerAtRoot = (window.location.pathname.length == 1 || window.location.pathname.length == 0);

if (!outerAtRoot) {
    var refTagger = {
        settings: {
            bibleVersion: "KJV",
            libronixBibleVersion: "DEFAULT",
            addLogosLink: false,
            appendIconToLibLinks: false,
            libronixLinkIcon: "light",
            noSearchClassNames: ["commentList"],
            useTooltip: true,
            noSearchTagNames: ["h1", "h2", "h3", "h4", "h5", "h6"],
            linksOpenNewWindow: true,
            convertHyperlinks: false,
            caseInsensitive: true,
            tagChapters: false
        }
    };

    (function (d, t) {
        var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
        g.src = 'https://api.reftagger.com/v2/reftagger.js';
        s.parentNode.insertBefore(g, s);
    }(document, 'script'));
}

function toggleMobileMenu() {
    var element = document.getElementById("hamburgerMenu");
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}

function closeMobileMenu() {
    var element = document.getElementById("hamburgerMenu");
    element.classList.add("hidden");
}

var staffSlideIndex = 0;

function showStaffSlides() {
    var i;
    var slides = document.getElementsByClassName("staff-slide");
    if (slides.length == 1) {
        slides[0].style.display = "block";
        return;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    staffSlideIndex++;
    if (staffSlideIndex > slides.length) { staffSlideIndex = 1 }
    slides[staffSlideIndex - 1].style.display = "block";
    setTimeout(showStaffSlides, 4000); // Change image every 2 seconds
}

(function () {
    document.addEventListener('DOMContentLoaded', function () {

        var atRoot = (window.location.pathname.length == 1 || window.location.pathname.length == 0);

        document.getElementById('hamburger')
            .addEventListener('click', function () {
                toggleMobileMenu()
            });

        window.addEventListener('scroll', () => {
            const topbar = document.querySelector('.top-bar')
            topbar.classList.toggle('onscroll', window.scrollY > 0)

            if (atRoot) {
                const nav = document.querySelector('nav')
                nav.classList.toggle('onscroll', window.scrollY > 0)
            }
        });

        if (atRoot) {
            showStaffSlides();
        }

        if (window.location.pathname == '/services/') {
            var secondarySlider = new Splide('#secondary-slider', {
                fixedWidth: 100,
                height: 70,
                gap: 10,
                cover: true,
                isNavigation: true,
                rewind: true,
                focus: 'center',
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    '550': {
                        fixedWidth: 66,
                        height: 46,
                    }
                },
            }).mount();

            var primarySlider = new Splide('#primary-slider', {
                fixedWidth: 800,
                type: 'fade',
                heightRatio: 0.7,
                rewind: true,
                pagination: false,
                arrows: false,
                cover: true,
                breakpoints: {
                    '1023': {
                        heightRatio: 0.5,
                    },
                    '600': {
                        fixedWidth: 600,
                        heightRatio: 0.5,
                    },
                    '500': {
                        fixedWidth: 500,
                    },
                    '400': {
                        fixedWidth: 400,
                    },
                    '350': {
                        fixedWidth: 350,
                    },
                    '300': {
                        fixedWidth: 300,
                    }
                },
            }); // do not call mount() here.

            primarySlider.sync(secondarySlider).mount();
        }
    });
})();