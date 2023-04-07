function Open() {
    document.querySelector('.sidebar').classList.toggle('-left-80')
}

// scroll ke atas 
$(window).scroll(function() {
    if($(this).scrollTop() > 600) {
        $('#toTop').show();
    } else {
        $('#toTop').hide();
    }
});

$('#toTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});