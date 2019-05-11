ymaps.ready(init);


var placemarks = [        // создаём масив с разными координатами меток и обозначениям
    {
        latitude:59.97,
        longitude:30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: 'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19'
    },
    {
        latitude:59.9414,
        longitude:30.2735,
        hintContent: '<div class="map__hint">Средний проспект д. 44</div>',
        balloonContent: 'Самые вкусные бургеры у нас! Заходите по адресу: Средний проспект д. 44'
    },
    {
        latitude:59.946639,
        longitude:30.416367,
        hintContent: '<div class="map__hint">ул. Шепетовская, д. 3</div>',
        balloonContent: 'Самые вкусные бургеры у нас! Заходите по адресу: ул. Шепетовская, д. 3'
    }
],
    geoObjects = [];     // создаём пустой массив в который будут вкладываться метки (кластр)


function init() {
    var map = new ymaps.Map("map-content", {
        center: [59.94, 30.32],      // положение карты при загрузке страницы
        controls: ['zoomControl'],   // убираем контролы все
        behaviors: ['drag'],         // кроме зума
        zoom: 12                     // указываем стандартный зум
    });

    for ( let i = 0; i < placemarks.length; i++ ) {      // перебираем масив с метками 
        geoObjects[i] = new ymaps.Placemark( [placemarks[i].latitude, placemarks[i].longitude], { // в каждом из элементов массива берём координаты и обозначения
            hintContent: placemarks[i].hintContent,            // берём хинту
            balloonContent: placemarks[i].balloonContent,      // берём балун
        },
        {
            iconLayout: 'default#imageWithContent',           // тип метки
            iconImageHref: 'map-marker.svg',                  // указываем путь к значку
            iconImageSize: [80, 80], //#endregion             // размеры значка
            iconImageOffset: [-40, -80]                       // ставим ножку метки ровно на координаты (с помощью сдвига по офссету)
        });
    };

    var clusterer = new ymaps.Clusterer({       // изменяем стандартную иконку класстера на свою
        clusterIcons: [
            {
                href: 'image/burg.png',        // задаём новую иконку кластера
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null      // убираем число меток в кластере на значке 
    })
    map.geoObjects.add(clusterer)               // 
    clusterer.add(geoObjects);
};

