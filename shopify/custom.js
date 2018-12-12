// function get_image_url(){
	// //get url
		// html2canvas(document.querySelector(".banded")).then(canvas => {
			// var final_image = base64ImageToBlob(canvas.toDataURL());
			// console.log(final_image);
			// post_image(final_image);
		// });
	// //get url
// }

// function bottom_basic(){
// var band_text = jQuery(".img-bottom .display-text-container").css("display");
// var band_text_span = jQuery(".img-bottom .display-text-container span").text();
// var band_image = jQuery(".img-bottom .display-image-container").css("display");
// if ((band_text == "block" && band_text_span != "") || (band_image == "block")){
	// jQuery(".img-bottom .display-image-container").height("36");
	// jQuery("#display-text").css({"height" : "100%", "width" : "1000px"});
	// var image_band = jQuery(".img-bottom .display-image-container").css("display");
	// var text_band = jQuery(".img-bottom .display-text-container").css("display");
	// var type = {image_band, text_band};
	// for(k in type){
		// if(type[k] == "block"){
			// var active = k;
			// break;
		// }
	// }
	// if(active == "image_band"){
		// var canvas_target = "#display-text";
	// }
	// else if(active == "text_band"){
		// var canvas_target = "#display-text";
	// }
	// html2canvas(document.querySelector(canvas_target),{backgroundColor: null,width: 387}).then(canvas => {
		// var rendered_image = canvas.toDataURL();
		// jQuery(canvas_target).before("<img class='banded'src='"+rendered_image+"'>");
		// jQuery(canvas_target).hide();
		// //get url
			// get_image_url();
		// //get url
	// });
// }
// else{
	// get_image_url();
// }
// }

// function top_basic(){
// var band_text = jQuery(".img-top .display-text-container").css("display");
// var band_text_span = jQuery(".img-top .display-text-container span").text();
// var band_image = jQuery(".img-top .display-image-container").css("display");
// if ((band_text == "block" && band_text_span != "") || (band_image == "block")){
	// jQuery(".img-top .display-image-container").height("36");
	// jQuery("#top-display-text").css({"height" : "100%", "width" : "1000px"});
	// var image_band = jQuery(".img-top .display-image-container").css("display");
	// var text_band = jQuery(".img-top .display-text-container").css("display");
	// var type = {image_band, text_band};
	// for(k in type){
		// if(type[k] == "block"){
			// var active = k;
			// break;
		// }
	// }
	// if(active == "image_band"){
		// var canvas_target = "#top-display-image";
	// }
	// else if(active == "text_band"){
		// var canvas_target = "#top-display-text";
	// }
	// html2canvas(document.querySelector(canvas_target),{backgroundColor: null,width: 387}).then(canvas => {
		// var rendered_image = canvas.toDataURL();
		// jQuery(canvas_target).before("<img src='"+rendered_image+"'>");
		// jQuery(canvas_target).hide();
		// //get url
			// get_image_url();
		// //get url
	// });
// }
// else{
	// get_image_url();
// }
// }

// function both_basic(){
// var band_text = jQuery(".img-top .display-text-container").css("display");
// var band_text_span = jQuery(".img-top .display-text-container span").text();
// var band_image = jQuery(".img-top .display-image-container").css("display");
// if ((band_text == "block" && band_text_span != "") || (band_image == "block")){
	// jQuery(".img-top .display-image-container").height("36");
	// jQuery(".img-bottom .display-image-container").height("36");
	// jQuery("#top-display-text").css({"height" : "100%", "width" : "1000px"});
	// var image_band = jQuery(".img-top .display-image-container").css("display");
	// var text_band = jQuery(".img-top .display-text-container").css("display");
	// var type = {image_band, text_band};
	// for(k in type){
		// if(type[k] == "block"){
			// var active = k;
			// break;
		// }
	// }
	// if(active == "image_band"){
		// html2canvas(document.querySelector("#display-text"),{backgroundColor: null,width: 387}).then(canvas => {
		// var rendered_image = canvas.toDataURL();
		// jQuery("#display-text").before("<img src='"+rendered_image+"'>");
		// jQuery("#display-text").hide();
			// html2canvas(document.querySelector("#top-display-image"),{backgroundColor: null,width: 387}).then(canvas => {
				// var rendered_image = canvas.toDataURL();
				// jQuery("#top-display-image").before("<img src='"+rendered_image+"'>");
				// jQuery("#top-display-image").hide();
				// //get url
					// get_image_url();
				// //get url
			// });
		// });
	// }
	// else if(active == "text_band"){
		// html2canvas(document.querySelector("#display-text"),{backgroundColor: null,width: 387}).then(canvas => {
		// var rendered_image = canvas.toDataURL();
		// jQuery("#display-text").before("<img src='"+rendered_image+"'>");
		// jQuery("#display-text").hide();
			// html2canvas(document.querySelector("#top-display-text"),{backgroundColor: null,width: 387}).then(canvas => {
				// var rendered_image = canvas.toDataURL();
				// jQuery("#top-display-text").before("<img src='"+rendered_image+"'>");
				// jQuery("#top-display-text").hide();
				// //get url
					// get_image_url();
				// //get url
			// });
		// });
	// }
// }
// else{
	// get_image_url();
// }
// }

window.addEventListener("load", function(){
//get cart count
jQuery.ajax({
	url: "https://les-amis-homme.myshopify.com/cart.json",
	type: "GET",
	dataType: "jsonp",
})
.done(function(response){
		var data = response;
		jQuery(".counter-shop-box").text("("+data.item_count+")")
		console.log(data);
});
//get cart count

jQuery(".btn-checkout").removeAttr("onclick");
jQuery(".btn-checkout").click(function() {

	var imageData = captureImage('#display-text');
	console.log(4);
	/*
	jQuery("#loader").show();
	jQuery("body").css("overflow", "hidden");
	if((jQuery(".section-product-details").hasClass("men")) || (jQuery(".section-product-details.women").hasClass("bottom"))){
		bottom_basic();
	}
	else if((jQuery(".section-product-details.women").hasClass("top"))){
		top_basic();
	}
	else if((jQuery(".section-product-details.women").hasClass("both"))){
		both_basic();
	}
	*/
});
});


/*
function captureImage(selector){
    $('.temp').remove();
    var temp = $("<div class='temp'></temp>");
        temp.appendTo('body');

    var content = $(selector).clone();
        content.appendTo(temp);

	html2canvas($("#bla")[0]).then(canvas => {
		//temp.remove();

		var rendered_image = canvas.toDataURL();

		$('body').append("<img class='banded'src='"+rendered_image+"'>");

		});
}
*/


// function captureImage(selector){
    // $('.temp').remove();
    // var temp = $("<div class='temp'></temp>");
        // temp.appendTo('body');

    // var content = $(selector).clone();
        // content.appendTo(temp);

	// html2canvas($(".temp")[0], {'backgroundColor': 'transparent', width :3840, height: 144, scale:1}).then(canvas => {
		// jQuery("#loader").show();
		// temp.remove();

		// var rendered_image = canvas.toDataURL();

		// $('body').append("<img class='banded' src='"+rendered_image+"'>");
		// var image_blob = base64ImageToBlob(rendered_image);
		// post_image(image_blob);
	// });
// }

function captureImage(selector){
    $('.temp').remove();
    var temp = $("<div class='temp'></temp>");
        temp.appendTo('body');

    var content = $(selector).clone();
        content.appendTo(temp);

	html2canvas($(".temp")[0], {'backgroundColor': 'transparent', width :3840, height: 144, scale:1}).then(canvas => {
		jQuery("#loader").show();
		temp.remove();

		var rendered_image = canvas.toDataURL();

		$('body').append("<img class='banded' src='"+rendered_image+"'>");
		var image_blob = base64ImageToBlob(rendered_image);
		//post_image(image_blob);
		if((jQuery(".section-product-details").hasClass("men")) || (jQuery(".section-product-details.women").hasClass("bottom"))){
			console.log(["#display-text"]);
			var arr = ["#display-text"];
			for (let i = 0; i < arr.length; i++) {
			  if(i === arr.length - 1){
				capture_full(arr[i], 1, image_blob);
			  }else{
				capture_full(arr[i], i, image_blob);
			  }
			}
		}
		else if((jQuery(".section-product-details").hasClass("top"))){
			var arr = ["#top-display-text"];
			for (let i = 0; i < arr.length; i++) {
			  if(i === arr.length - 1){
				capture_full(arr[i], 1, image_blob);
			  }else{
				capture_full(arr[i], i, image_blob);
			  }
			}
		}
		else if((jQuery(".section-product-details").hasClass("both"))){
			var arr = ["#display-text", "#top-display-text"];
			for (let i = 0; i < arr.length; i++) {
			  if(i === arr.length - 1){
				capture_full(arr[i], 1, image_blob);
			  }else{
				capture_full(arr[i], i, image_blob);
			  }
			}
		}
	});
}

function capture_full(selector, loop, image_blob){
	//var temp = $('.temp').remove();
	var base = "temp"+loop;
	$('.'+base).remove();
    var temp = $("<div class='temp "+base+"'></temp>");
        temp.appendTo('body');
    var content = $(selector).clone();
        content.appendTo(temp);
	html2canvas($("."+base)[0], {'backgroundColor': 'transparent'}).then(canvas => {
		temp.remove();
		var rendered_image = canvas.toDataURL();
		jQuery(selector).before("<img style='max-width: 200%;' src='"+rendered_image+"'>");
		jQuery(selector).hide();
		if(loop == 1){
			html2canvas($("#img-mask")[0], {'backgroundColor': 'transparent'}).then(canvas => {
				var rendered_image = canvas.toDataURL();
				$('body').append("<img src='"+rendered_image+"'>");
				var image_blob_2 = base64ImageToBlob(rendered_image);
				post_image(image_blob, image_blob_2);
				console.log(image_blob, image_blob_2);
				$('body').append("<img class='tests' src='"+rendered_image+"'>");
			});
		}
	}).catch(e => {
		console.log(e);
	});
	console.log(Math.random())
}

function post_image(final_image, final_image_2){
var product_price = jQuery("#item-price").text().replace('$','');
var line_count = jQuery("#item-quantity").val();
var product_size = jQuery("#item-size").val();
var formData = new FormData();
formData.append("product_pic", final_image);
formData.append("product_pic_2", final_image_2);
//formData.append("product_pic2", final_image);
formData.append("product_price", product_price);
formData.append("line_count", line_count);
formData.append("product_size", product_size);
jQuery.ajax({
    url: "shopify/upload.php",
    type: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: formData})
		.fail(function(e){
            alert('Operation Failed, Please Try Again!');
        })
        .done(function(response){
			// if(xhr.responseText == "success"){
				// alert('Operation Succesful!');
			// }
			// else{
				// alert('Operation Failed, Please Try Again!');
			// }
			var data = response;
			var data = JSON.parse(data);
			var data = JSON.parse(data);
			var variant_id = data.product.variants[0].id;
			var body_html = data.product.body_html;
			var band_image = data.product.vendor;
			jQuery.ajax({
				// url: "https://les-amis-homme.myshopify.com/cart/add.json?quantity="+line_count+"&id="+variant_id+"&properties%5Bimage_link%5D="+body_html,
				url: "https://les-amis-homme.myshopify.com/cart/add.json?quantity="+line_count+"&id="+variant_id+"&properties%5B_image_link%5D="+band_image+"&properties%5Bsize%5D="+product_size,
				type: "GET",
				dataType: "jsonp",
			})
			.done(function(response){
					var data = response;
					window.location = "https://les-amis-homme.myshopify.com/checkout";
			});
        })
		.always(function (e){
			//location.reload();
		});
}

function base64ImageToBlob(str) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(';base64,');
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for(var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}