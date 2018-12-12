
$(document).ready(function(){

    $('.gallery-btn').click(showGallery);
    $('.gallery .close').click(closeGallery);

    $('body').click(tryCloseGallery);

    $('.gallery img').click(setImage);

    $('#image .close').click(unsetImage);
});


function showGallery(){
    $('.gallery').addClass('active');
    $('body').addClass('overlay');
}

function closeGallery(){
    $('.gallery').removeClass('active');
    $('body').removeClass('overlay');
}

function tryCloseGallery(e){
    if(!$(e.target).hasClass('gallery') && !$(e.target).hasClass('gallery-btn')){
        closeGallery();
    }
}


function setImage(e){
    $('body').addClass('image-set');

    $('span.custom-img').each(function(){
        var img = $(e.currentTarget).clone();
            img.addClass('custom-item');
        $(this).html(img);
    });


    var id = $('#item-color').val();

    for(var i=0; i<item.colors.length; i++){
        if(item.colors[i].id==id)
            color = item.colors[i];
    }
    //var date = new Date().getTime();

    //$("#item-img").attr('src', color.custom+'?'+date);

    roundItems();
}


function unsetImage(){
    $('body').removeClass('image-set');

    $('span.custom-img').empty();

    var id = $('#item-color').val();

    for(var i=0; i<item.colors.length; i++){
        if(item.colors[i].id==id)
            color = item.colors[i];
    }
    var date = new Date().getTime();

    roundItems();
}