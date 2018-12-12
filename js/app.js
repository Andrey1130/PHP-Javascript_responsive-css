var item;

$(document).ready(function() {

    $("#item-img").load(showImage);
    $("#top-item-img").load(showImage);


    $('a[data-toggle=tab]').click(function(e){
        e.preventDefault();

        $(e.currentTarget).parent().parent().find('a[data-toggle=tab]').removeClass('active');
        $(e.currentTarget).addClass('active');

        $(e.currentTarget).parent().parent().parent().find('.tab-pane.active').removeClass('active');
        $($(e.currentTarget).attr('href')).addClass('active');

    });


    function showImage(e){
        $(e.currentTarget).removeClass('hide');
    }






    if($('body').hasClass('select-page')){
        adjustOverlay();
        $(window).resize(adjustOverlay);
    }

    $(window).scroll(function(){
        $('.select-font').removeClass('active');
    });
    $(window).resize(function(){
        $('.select-font').removeClass('active');
    });

    $('body').click(closeFonts);
    $('.selected-font').click(toggleFonts);
    $('.select-font span').click(selectFont);

    $('#text-color').click(function(){
        $('.text-color-close').addClass('active');
    });
    $('.text-color-close').click(function(){
        $('.text-color-close').removeClass('active');
    });


    $('.more').click(function(e){
        var inp = $(e.currentTarget).parent().find('input');
        inp.val(parseInt(inp.val())+1);
        inp.trigger('change');
    });

    $('.less').click(function(e){
        var inp = $(e.currentTarget).parent().find('input');
        if(parseInt(inp.val())-1>=0){
            inp.val(parseInt(inp.val())-1);
            inp.trigger('change');
        }
    });

// 'use strict';
    $(function(){
        /*$('#carouselintagram.carousel').carousel({
            interval: 8000,
            auto:true
       });*/
    });

    $(function () {
        $(".instalist").slice(0, 4).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".instalist:hidden").slice(0, 4).slideDown();
            if ($(".instalist:hidden").length === 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

    window.setTextColor = function(picker) {
        setText();
        //$('.jscolor . preview').css('background', '#' + picker.toString());
        //document.getElementsByTagName('body')[0].style.color = '#' + picker.toString();
    };


    window.preset = function(e){
        $('#text-color')[0].jscolor.fromString($(e.currentTarget).css('background-color'));
        setText();
        //onmouseover="document.getElementById('text-color').jscolor.fromString('ff9900')"
    };


 $(function () {

        $("#loadLess").on('click', function (e) {
            e.preventDefault();


            if ($(".instalist:visible").length > 4) {
              $(".instalist:visible").slice(0, 4).slideUp();

              $('html,body').animate({
                scrollTop: $(this).offset().bottom
            }, 1500);

            }

        });
    });




});



$(window).load(function(){
    var url = new URL(window.location.href);
    var gender = url.searchParams.get('gender');
    $('#genderTab .'+gender).addClass('active');

    $('.section-product-details').addClass($('#genderTab .active').attr('href'));

    loadItem($('#genderTab .'+gender).attr('id'));

    /*$(".verticalCarousel").verticalCarousel({
                currentItem: 1,
                showItems: 5,
    });*/



});



function adjustOverlay(){
    var h = $(window).height() - $('nav.navbar').outerHeight() - $('footer').outerHeight()-10;
    $('.overlay').outerHeight(h);
}


function loadItem(id){
    $('.section-product-details').attr('item-id', id);
    $('#main-container').addClass('loading');

    $.ajax({
        type: "POST",
        url: 'php/get-item.php',
        data: {
            'id': id
        },
        success: function(data) {
            $('#main-container').removeClass('loading');
            try{
                item = $.parseJSON(data);
                setItem();
            }
            catch(e){
                console.log("Laoding Error");
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            $('#main-container').removeClass('loading');
            }
        });
}


function setItem(){
    $('#item-color').empty();

    for(var c=0; c<item.colors.length; c++){
            var color = $("<option></option>");

            color.text(item.colors[c].name);
            color.val(item.colors[c].id);

            $('#item-color').append(color);
    }

    setTimeout(function(){
        $('#item-color').val($('#item-color option').first().attr('value'));
        $('#item-color').trigger('change');
    }, 100);

    setImg();

    $('#item-size').empty();
    for(var s=0; s<item.sizes.length; s++){
        var size = $("<option></option>");
            size.text(item.sizes[s].name);
            size.val(item.sizes[s].name);
        $('#item-size').append(size);
    }

    $('#item-info-note').text(item.info.note);
    $('#item-info-size').text(item.info.size);
    $('#item-info-details').text(item.info.details);
    $('#item-info-delivery').text(item.info.delivery);

    $('#item-fontsize').val(25);
    $('#item-spacing').val(10);
    $('#item-quantity').val(1);

    setText();

    setRecommendations();
}


function setImg(){

    var id = $('#item-color').val();
    var color = item.colors[0];
    for(var i=0; i<item.colors.length; i++){
        if(item.colors[i].id==id)
            color = item.colors[i];
    }

    var txt = $('#item-text').val().split('');
    $('span.custom-text').empty();
    for(var i=0; i<txt.length; i++){
        $('#display-text span.custom-text').append('<span class="custom-item">'+txt[i]+'</span>');
        $('#top-display-text span.custom-text').append('<span class="custom-item">'+txt[i]+'</span>');
    }


    var date = new Date().getTime();

    $("#item-img").attr('src', color.image+'?'+date);
    $("#top-item-img").attr('src', color.top_image+'?'+date);
    $("#item-img").addClass('hide');
    $("#top-item-img").addClass('hide');



    //women mode
     $('.section-product-details').removeClass('top');
     $('.section-product-details').removeClass('bottom');
     $('.section-product-details').removeClass('both');

    if($('.section-product-details').hasClass('women'))
    switch($('#women-switch input:checked').attr('id')){
        case 'top-radio':     $('.section-product-details').addClass('top'); break;
        case 'bottom-radio':  $('.section-product-details').addClass('bottom'); break;
        case 'both-radio':    $('.section-product-details').addClass('both'); break;
    }

    if($('.section-product-details').hasClass('spinner-view') && !$('.section-product-details').hasClass('both')) setSpinner();

    roundItems();
}


function setImgonthumbclick(src, id){
    console.log(id);
   //src = src.replace("2", "1");
   //item-color
   var file=src.split('/').pop();

   var filename = file.split('.').shift();

   var file_ext = file.split('.').pop().toLowerCase();
   //var custom_image = 'images/items/'+id+'/'+filename+'_custom.'+file_ext;
   $("#item-color").val(id);
   var img = $("#item-img");
/*
    if($('#item-text').val()===''){
        img.attr('src', src);
    }else{
        img.attr('src', custom_image);
    }
*/
    var txt = $('#item-text').val();

    $('#display-text span.custom-text').html(txt);
    $('#top-display-text span.custom-text').html(txt);

    setImg();
}


function clickTab(e){
    e.preventDefault();
    loadItem($(e.currentTarget).attr('id'));
    $('.section-product-details').attr('class', 'section-product-details '+$(e.currentTarget).attr('href'));
}



function setText(){
    $('#display-text').css('color', $('#styleInput').css('background-color'));
    $('#display-text').css('font-size', $('#font-size').val()+'px');
    $('#display-text span.custom-text').css('padding-left',  $('#font-spacing').val()+'px');
    $('#display-text span.custom-text').css('padding-right', $('#font-spacing').val()+'px');

    $('#custom-font').attr('href', 'https://fonts.googleapis.com/css?family='+$('.selected-font img').attr('value').replace(' ', '+'));
    $('#display-text').css('font-family', "'"+$('.selected-font img').attr('value')+"'");

    roundItems();

    //top

    $('#top-display-text').css('color', $('#styleInput').css('background-color'));
    $('#top-display-text').css('font-size', $('#font-size').val()+'px');
    $('#top-display-text span.custom-text').css('padding-left', $('#font-spacing').val()+'px');
    $('#top-display-text span.custom-text').css('padding-right', $('#font-spacing').val()+'px');

    $('#top-display-text').css('font-family', "'"+$('.selected-font img').attr('value')+"'");
}


function roundItems(){
    var l = $('#display-text .custom-item').length;
    var n = parseInt($('#display-text .custom-item').length/2);

    var s = parseInt($('#font-size').val())/8;

    var p = 0;

    var e = 0;
    if(l%2 == 0) e = 1;

    for(i=n; i<=l; i++){
        $('#display-text .custom-item').eq(i).css('transform',     'translateY(-'+(p*s)+'%)');
        $('#display-text .custom-item').eq(n-p-e).css('transform', 'translateY(-'+(p*s)+'%)');

        p++;
    }

    var ts = parseInt($('#font-size').val())/6;

    p = 0;
    for(i=n+4; i<=l; i++){
        $('#top-display-text .custom-item').eq(i).css('transform',       'translateY(-'+(p*ts)+'%)');
        $('#top-display-text .custom-item').eq(n-p-e-4).css('transform', 'translateY(-'+(p*ts)+'%)');
        p++;
    }

}


function setPrice(){
    var price=0;


    var quantity = 1;
    if($('#item-quantity').val()>1)
        quantity = parseInt($('#item-quantity').val());

    for(var i=0; i<item.sizes.length; i++){
        if(item.sizes[i].name==$('#item-size').val())
            price = item.sizes[i].price;
    }

    if($('#item-text').val()!=='')
        price+=item.print_price;

    price *= quantity;

    price = (Math.round( price * 100 ) / 100).toFixed(2);

    $('#item-price').text('$'+price);
}


function setRecommendations(){
    if($('.slides').hasClass('slick-initialized')) $('.slides').slick('unslick');
    $('.slides').empty();
    for(var i=0; i<item.recommendations.length; i++){

        var li = $("<li class='pb-10'></li>");
            li.appendTo('.slides');

        var date = new Date().getTime();

        if($('.section-product-details').hasClass('both')){
            var img2 = $("<img class='recommendation-img' id='' />");
                img2.appendTo(li);
                img2.attr('id', item.recommendations[i].id);
                img2.attr('src', item.recommendations[i].top_img+'?'+date);
                img2.click(clickImg);
        }

        var img = $("<img class='recommendation-img' id='' />");
            img.appendTo(li);
            img.attr('id', item.recommendations[i].id);
            if($('.section-product-details').hasClass('women') && $('.section-product-details').hasClass('top'))
                img.attr('src', item.recommendations[i].top_img+'?'+date);
            else
                img.attr('src', item.recommendations[i].img+'?'+date);
            img.click(clickImg);


        //$('#item-color').val(item.recommendations[i].id);
        //$('#item-color').trigger('change');
    }

    $('.slider').addClass('hide');

    setTimeout(function(){
        $('.slides').slick({
            autoplay: false,
            arrows: true,
            dots: false,
            slidesToShow: 6,
            centerPadding: "10px",
            draggable: false,
            infinite: true,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
            vertical: true,
            speed: 500,
            autoplaySpeed: 2000,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,
          });
        $('.slides').on('wheel', (function(e) {
            e.preventDefault();
              if (e.originalEvent.deltaY > 0)  $(this).slick('slickNext');
                                        else   $(this).slick('slickPrev');
        }));
    }, 100);
    setTimeout(function(){ $('.slick-next').trigger('click'); }, 200);
    setTimeout(function(){ $('.slider').removeClass('hide');  }, 1000);


    function clickImg(e){
        setImgonthumbclick( $(e.currentTarget).attr("src"), $(e.currentTarget).attr("id" ) );
    }

    setImg();
}

function toggleFonts(){
    if($('.select-font').hasClass('active'))
        $('.select-font').removeClass('active');
    else
        openFonts();
}

function openFonts(){
    $('.select-font').addClass('active');
    $('.select-font').offset({'left': $('.selected-font').offset().left});

    var topGap = $('.selected-font').offset().top - $(window).scrollTop();
    var bottomGap = $(window).height()-($('.selected-font').offset().top - $(window).scrollTop());

    if(bottomGap>300){
        $('.select-font').offset({'top': $('.selected-font').offset().top+50});
        $('.select-font').height(bottomGap-100);
    }
    else if(topGap>300){
        $('.select-font').css('top', '20px');
        $('.select-font').height(topGap-30);
    }
    else{
        $('.select-font').css('top', '20px');
        $('.select-font').height($(window).height()-40);
    }
}

function closeFonts(e){
    if(!$(e.target).parent().hasClass('selected-font') && !$(e.target).hasClass('selected-font'))
        $('.select-font').removeClass('active');
}



function selectFont(e){
    $('.selected-font').empty();
    $('.selected-font').append($(e.currentTarget).find('img').clone(false));
    setText();
}


function checkout(){


        $('#main-container').addClass('loading');

        $.ajax({
            type: "POST",
            url: 'php/checkout.php',
            data: {
                'user_id': 1,
                'item_id': item.id,
                'color_id':      $('#item-color').val(),
                'custom_text':   $('#item-text').val(),
                'font':          $('#item-text-font').val(),
                'fontsize':      25,
                'spacing':       10,
                'text_color':    $('#item-text-color').val(),
                'item_size':     $('#item-size').val(),
                'item_quantity': $('#item-quantity').val()
            },
            success: function(data) {
                console.log(data);
                try{
                    source = $.parseJSON(data);

                    if(source.success) $('#main-container').addClass('done');

                    setTimeout(function(){
                        $('#main-container').removeClass('loading');
                        $('#main-container').removeClass('done');
                    }, 2500);

                }
                catch(e){
                    console.log("Error");
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                $('#main-container').removeClass('loading');
                }
            });

}


function selectNumber(e){
    $(e.currentTarget).parent().find('input').val($(e.currentTarget).val());
    setText();
}


function womenMode(e){
    $('#women-switch input').prop('checked', false);
    $(e.currentTarget).prop('checked', true);

    setImg();
    setRecommendations();
}


