    var spinner;

    //$(window).load(set360);


    function setSpinner(){
        $('.section-product-details').addClass('spinner-view');

        var id = $('.section-product-details').attr('item-id');

        var folder = '360_bottom';
        if($('.section-product-details').hasClass('top'))    folder = '360_top';
        if($('.section-product-details').hasClass('bottom')) folder = '360_bottom';
        if($('.section-product-details').hasClass('both'))   folder = '360_both';

        var nameOfDiv = "spinner";
        var folderName = "/images/items/"+id+"/"+folder;
        var viewPortWidth = $('#spinner-mask').innerWidth() / 2;
        var viewPortHeight = 450;
        // var viewPortHeight = 500;
        var backgroundColor = "#FFFFFF";
        var uCount = 24;
        var vCount = 1;
        var uWrap = true;
        var vWrap = false;
        var uMouseSensitivity = -0.0666667;
        var vMouseSensitivity = 1;
        var uStartIndex = 12;
        var vStartIndex = 0;
        var minZoom = 1;
        var maxZoom = 1;
        var rotationDamping = 0.96;
        var downScaleToBrowser = true;
        var addDownScaleGUIButton = false;
        var downloadOnInteraction = false;
        var imageExtension = "jpg";
        var showLoading = false;
        var loadingIcon = "/images/ks_logo.png"; // Set to empty string for default icon.
        var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
        var uReverse = false;
        var vReverse = false;
        var hotspots = {};

        spinner = new keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots);
    }


function setNormal(){
    $('.section-product-details').removeClass('spinner-view');
}


