
$(document).ready(function(){
    $('#img-mask .img-comtainer').on('mousemove', positionZoom);
    $('#img-mask .img-comtainer').on('mouseleave', resetZoom);
});


function positionZoom(e){
    var x = (e.clientX - $('#img-mask .img-comtainer').offset().left) * 100  / $('#img-mask .img-comtainer').width();
    var y = (e.clientY - $('#img-mask .img-comtainer').offset().top) * 100  / $('#img-mask .img-comtainer').height();
    $('.img-comtainer').css('left', (((1.5*x)-50) ) +'%');
    $('.img-comtainer').css('top', ((y-50)) +'%');
}

function resetZoom(){
    $('.img-comtainer').removeAttr('style');
}