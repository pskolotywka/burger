document.body.onload = function() {
    var preloader = document.querySelector('.transition-loader');

    if(preloader.classList.contains('done')) {
        setTimeout(function fadeof() {
            preloader.style.opacity = '0';
            setTimeout(function deletes() {
                preloader.style.display = 'none';
            }, 300);
        }, 1000); 
    }
    
}