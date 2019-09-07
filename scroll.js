const seactions = $('.sector');
const monitor = $('.main-content');


let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();


const switchDot = menuItemIndex => {
    $('.pagination__item')
        .eq(menuItemIndex)
        .addClass('active')
        .siblings()
        .removeClass('active');
}

const onScroll = sectionEq => {
const position = (sectionEq * "-100") + "%";  // Здесь происходит движение слайдов
    
    if (inScroll) return;

        inScroll = true;
        
        seactions
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');

    monitor.css({
        'transform' : `translateY(${position})`
    });
    setTimeout(() => {
        inScroll = false;
        switchDot(sectionEq);
    }, 100 + 100);
};

const scrollToSection = direction => {
    const activeSection = seactions.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    if (direction == 'next' && nextSection.length) {
        onScroll(nextSection.index());
    }
    if (direction == 'prev' && prevSection.length) {
        onScroll(prevSection.index());
    }
}


$('.wrapper').on('wheel', e => {
    const delta = e.originalEvent.deltaY;

    if (delta > 0) {
        scrollToSection('next');
    }
    if (delta < 0) {
        scrollToSection('prev');
    }

})

$(document).on('keydown', e => {

    switch(e.keyCode) {
        case 40: scrollToSection('next'); break;
        case 38: scrollToSection('prev'); break;

    }
})

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const target = $(e.currentTarget).attr("data-scroll-to");
    onScroll(target);
})

if (isMobile) {
    $(window).swipe( {
        swipe:function(event, direction) {
          const nextOrPrev = direction == 'up' ? 'next' : 'prev';
          scrollToSection(nextOrPrev);
        }
    });
}
