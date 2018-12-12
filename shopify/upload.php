<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once(__DIR__ ."/guzzle/vendor/autoload.php"); 
if(isset($_FILES["product_pic"])){
	$product_pic = uniqid()."_product_pic_".time().".png";
	$product_pic_2 = uniqid()."_product_pic_2_".time().".png";
	$product_price = $_REQUEST["product_price"];
	$product_size = $_REQUEST["product_size"];
	$line_count = $_REQUEST["line_count"];
	move_uploaded_file($_FILES["product_pic"]["tmp_name"], dirname(__FILE__) . "/order_pictures/".$product_pic);
	
	move_uploaded_file($_FILES["product_pic_2"]["tmp_name"], dirname(__FILE__) . "/order_pictures/".$product_pic_2);
	file_put_contents(__DIR__ ."/orders.txt", $product_pic.", ".$product_price.", ".$line_count.", ".$product_size.PHP_EOL, FILE_APPEND);
	//print_r($_FILES["product_pic_2"]);
	//die;
}
else{
	echo "fail";
	die;
}

$product_array = array(
    "product"=>array(
        "title"=> "Select Basics Item",
        // "body_html"=> "http://selectbasics.com/shopify/order_pictures/".$product_pic,
		"body_html"=> "Select Basics",
		"vendor" => "http://selectbasics.com/shopify/order_pictures/".$product_pic,
        "product_type"=> "Select Basics",
		"images" => array( 
						array (
						"src" => "http://selectbasics.com/shopify/order_pictures/".$product_pic_2,
						)
		),
        "published"=> true,
        "variants"=> array(
                        array(
						//"inventory_management" => "shopify",
						"inventory_policy" => "continue",
						//"fulfillment_service" => "manual",
						//"inventory_quantity" => $line_count,
                        "price"=>$product_price/$line_count,
                        "size"=>$product_size,
                        )
						
        ),
    )
);
$url = "https://4cc6cd6b81125b51affcdb1b782af8a9:8486a0a5ac52da79bbbe4bc53e40f04c@les-amis-homme.myshopify.com/admin";
make_curl_post($url."/products.json", $product_array);


function make_curl_post($end_point, $data) {
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $end_point);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_VERBOSE, 0);
	curl_setopt($curl, CURLOPT_HEADER, 0);
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	$response = curl_exec ($curl);
	curl_close ($curl);
	echo json_encode($response);
}
exit();
