var siteW = $(window).width();
var siteH = $(window).height();

$("p").css({ lineHeight: siteH + 'px' }); // dirty dirty

TweenMax.set(".site", { perspective: 5000 });
TweenMax.set(".container", { transformStyle: "preserve-3d", transformOrigin: '-0% 50%' });
TweenMax.set("#new-content", { rotationY: 90, z: -siteW / 2, x: siteW / 2 });

var tlFlip = new TimelineMax({ yoyo: true, repeat: -1, delay: 1.5, repeatDelay: 2 });

tlFlip
    .to('.site', .5, { scale: 0.8, ease: Power2.easeInOut }, "start")
    .to('.container', .4, { rotationY: -90, z: -siteW, ease: Power2.easeInOut }, "start+=0.7")
    .to('.site', .5, { scale: 1, ease: Power2.easeInOut }, "start+=1.2");