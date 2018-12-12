<?php

$user_id = $_POST['user_id'];
$item_id = $_POST['item_id'];
$color_id = $_POST['color_id'];
$custom_text = $_POST['custom_text'];
$font = $_POST['font'];
$fontsize = $_POST['fontsize'];
$spacing = $_POST['spacing'];
$text_color = $_POST['text_color'];
$item_size = $_POST['item_size'];
$item_quantity = $_POST['item_quantity'];

$result = array(
    'success' => true
);


//processing...
sleep(1);



echo json_encode($result);

?>