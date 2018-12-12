<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once(__DIR__ ."/guzzle/vendor/autoload.php"); 

$line_count = 123;

$product_pic = "http://selectbasics.com/shopify/order_pictures/band_image.png";
$product_price = 10.99;
$product_size = "M";
$products_array = array(
    "product"=>array(
        "title"=> "Select Basics Item",
        "body_html"=> "http://selectbasics.com/shopify/order_pictures/".$product_pic,
		"vendor" => "Select Basics",
        "product_type"=> "Select Basics",
		"images" => array(
						"src" => "http://selectbasics.com/shopify/order_pictures/".$product_pic,
						),
        "published"=> false,
        "variants"=> array(
                        array(
                        "price"=>$product_price,
                        "size"=>$product_size,
                        )
						
        )
    )
);
$url = "https://4cc6cd6b81125b51affcdb1b782af8a9:8486a0a5ac52da79bbbe4bc53e40f04c@les-amis-homme.myshopify.com/admin";
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url."/products.json");
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_VERBOSE, 0);
curl_setopt($curl, CURLOPT_HEADER, 1);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($products_array));
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec ($curl);
curl_close ($curl);
echo "<pre>";
print_r($response); 

exit();
 