
var player;

  function onYouTubePlayerAPIReady() {
    player = new YT.Player('video__content', { // Указываем блок в который вставляем видео
      height: '395',     // размеры окна видео
      width: '688',
      videoId: '3LELwZrbCxY', // айди на видео с ютуба (оно вконце ссылки видео на ютубе)
      playerVars: {
        controls: 0,    // убирает навигацию ютуба
        disablekb: 0,   // отключает управление клавиатурой
        showinfo: 0,    // не выводит ифнормацию о видео
        rel: 0,         // не выводит похожие видео
        autoplay: 0,    // не автопроизводит видео
        modestbranding: 0
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }

$('.video__splash-button').on('click', e => {
    player.playVideo()
});



$('.video__playback').on('click', e => {
    const bar = $(e.currentTarget);
    const barPosition = e.originalEvent.layerX;                             // узнаем позицию при клике по плэйбэку
    const clickedPercent = (barPosition / bar.width()) * 100;               // высчитываем процент позиции на которую нужно передвинуть ползунок
    const videoPosition = (player.getDuration() / 100) * clickedPercent;    // высчитываем время на которое нужно перемотать видео

    player.seekTo(videoPosition);
})


function timerDisplay() {
    $(".video__time-duration").text(formatTime(player.getCurrentTime()));      // вставили в текст сколько прошло
    $(".video__time-playing").text(formatTime(player.getDuration()));         // вставили в текст общее время
}


function onPlayerReady(event) {

    let interval;                                                              // создаём переменную (меняющеюся)
    const durationTime = player.getDuration();                                 // берём в переменную всю длительность видео
    clearInterval(interval);                                                    // каждый раз очищаем интервал перед его запуском
    timerDisplay();
    interval = setInterval(() => {                                                // создали интервал в 1 секунду обновления
    const completedTime = player.getCurrentTime();                                 // берём в переменную пройденное время видео
    const percent = (completedTime / durationTime) * 100;                           // делим пройдённое время на общую длительность и умножаем на 100, получаем 

    $('.video__playback-dot').css({
        left: `${percent}%`                                                         // вставляем полученный процент шага, ставим проценты
    })
    
    timerDisplay();  
    }, 1000);
}


function onPlayerStateChange(event) {
    const btn = $('.video__play');
    const btnSplash = $('.video__splash-button');
    switch(event.data) {                              // задаём определённые части кода на определённый состояния работы плэйера
        case 1:                         // при 1 (воспроизведение) добавляется кнопка паузы
        btn.addClass('pause');                                                   // пауза
        $('.video__splash').css({                           // убирается плавно окно сплэша
            opacity:0,
        })
        btnSplash.css({                                         // плавно убирается кнопка сплэша
            opacity: 0,
        })
        setTimeout(() => {                                          // через время анимации ставит дисплей нон кнопке и окну сплэша
            btnSplash.css({
                display: 'none'
            })
            $('.video__splash').css({
                display: 'none'
            })
        }, 500)
        break;
        case 2:
        btn.removeClass('pause');
        break;
    }
}


$('.video__play').on('click', e => {
    const playerState = player.getPlayerState(); // (Проверка статуса воспроизведения) -1 – воспроизведение видео не началось 0 – воспроизведение видео завершено 1 – воспроизведение 2 – пауза 3 – буферизация 5 – видео находится в очереди
    if(playerState !== 1) {                          // если не воспроизводиться, тогда воспроизводим и меняем кнопку с помощью класса pause
        player.playVideo()
    } 
    else {
        player.pauseVideo();                  // или же останавливаем и меняе снова кнопку на плэй
    }
});



function formatTime(time) {                                 // создаём функцию для отслеживания времени
    const roundTime = Math.round(time);                     // с помощью math.round округляем значение общего времени
    const minutes = Math.floor(roundTime / 60);             // округляем минуты, деля общее время на 60
    const seconds = roundTime - minutes * 60; 
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;   // делаем сам вид текста (вроде)
}




$('.video__volume-btn').on('click', e => {
    const volume = $('.video__volume-btn');
    var volPos = player.getVolume()
    const volPosDot = (58 / 100) * volPos;


    const dotka = document.querySelector('.video__volume-playback-dot');
    const dotkaPos = getComputedStyle(dotka); 
    const dotPosition = dotkaPos.left;

    if (player.isMuted()) {
        player.unMute();
        $('.video__volume').addClass('active');
        dotka.style.left = volPosDot - 6 + 'px';
        console.log(dotka.style.left)
    }
    else {
        player.mute();
        $('.video__volume-playback-dot').css({
            left: `0px`
        })
        $('.video__volume').removeClass('active');
        
    }
    
});

var sliderElem = document.querySelector('.video__volume-playback');
var thumbElem = document.querySelector('.video__volume-playback-dot');

thumbElem.onmousedown = function(e) {
    var thumbCoords = getCoords(thumbElem);
    var shiftX = e.pageX - thumbCoords.left;
    var sliderCoords = getCoords(sliderElem);
    document.onmousemove = function (e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;
        if (newLeft < 0) {
            newLeft = 0;
        };
        var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        };
        thumbElem.style.left = newLeft + 'px';
        var isLeft = sliderElem.getBoundingClientRect().width;
        var volumePos = (100 / isLeft) * newLeft;
        player.setVolume(volumePos);  
    };
    document.onmouseup = function (e) {
        document.onmousemove = document.onmouseup = null;
    };
    thumbElem.ondragstart = function() {
        return false;
    }
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}

$('.video__volume-playback').on('click', e => {
    const barVol = $(e.currentTarget);
    const newButtonPosition = e.pageX - barVol.offset().left -6;
    console.log(newButtonPosition)
    let clickVolumeLvl = (100 / 46) * newButtonPosition;
    $('.video__volume-playback-dot').css({
        left: `${newButtonPosition}px`
    })
    player.setVolume(clickVolumeLvl);

  });


var sliderElemT = document.querySelector('.video__playback');
var thumbElemT = document.querySelector('.video__playback-dot');

thumbElemT.onmousedown = function(e) {
    var thumbCoords = getCoords(thumbElemT);
    var shiftX = e.pageX - thumbCoords.left;
    var sliderCoords = getCoords(sliderElemT);
    document.onmousemove = function (e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;
        if (newLeft < 0) {
            newLeft = 0;
        };
        var rightEdge = sliderElemT.offsetWidth - thumbElemT.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        };
        thumbElemT.style.left = newLeft + 'px';

        var isLeftVideo = sliderElemT.getBoundingClientRect().width;
        var durationVideo = player.getDuration();
        var videoPos = (isLeftVideo / durationVideo) * newLeft;

        player.seekTo(videoPos);
    };
    document.onmouseup = function (e) {
        document.onmousemove = document.onmouseup = null;
    };
    thumbElemT.ondragstart = function() {
        return false;
    }
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}