<?php

$id = $_POST['id'];



//processing...
sleep(1);

if($id==1)

$item = array(
    'id' => '1',
    'print_price' => 5,
    'sizes' => [
        array(
            'name' => 'S',
            'price' => 14.99
        ),
        array(
            'name' => 'M',
            'price' => 15.99
        ),
        array(
            'name' => 'L',
            'price' => 16.99
        )
    ],
    'colors' => [

        array(
            'id' => '1',
            'name' => 'white',
            'image' => 'images/items/1/white.jpg'
        ),
        array(
            'id' => '2',
            'name' => 'black',
            'image' => 'images/items/1/black.jpg',
        ),
        // array(
        //     'id' => '3',
        //     'name' => 'iris',
        //     'image' => 'images/items/1/iris.jpg',
        // ),
        // array(
        //     'id' => '4',
        //     'name' => 'blue',
        //     'image' => 'images/items/1/blue.jpg',
        // ),
        // array(
        //     'id' => '5',
        //     'name' => 'red',
        //     'image' => 'images/items/1/red.jpg',
        // ),
        // array(
        //     'id' => '6',
        //     'name' => 'yellow',
        //     'image' => 'images/items/1/yellow.jpg',
        // ),
        // array(
        //     'id' => '7',
        //     'name' => 'violet',
        //     'image' => 'images/items/1/violet.jpg',
        // ),
        // array(
        //     'id' => '8',
        //     'name' => 'green',
        //     'image' => 'images/items/1/green.jpg',
        // ),
        // array(
        //     'id' => '9',
        //     'name' => 'black',
        //     'image' => 'images/items/1/black.jpg',
        // ),
        // array(
        //     'id' => '10',
        //     'name' => 'magenta',
        //     'image' => 'images/items/1/magenta.jpg',
        // ),
        // array(
        //     'id' => '11',
        //     'name' => 'pink',
        //     'image' => 'images/items/1/pink.jpg',
        // ),
        // array(
        //     'id' => '12',
        //     'name' => 'melange',
        //     'image' => 'images/items/1/melange.jpg',
        // ),
        // array(
        //     'id' => '13',
        //     'name' => 'peach',
        //     'image' => 'images/items/1/peach.jpg',
        // )

    ],
    'info' => array(
        'note' => "Top up your underwear drawer with this three-pack of black Calvin Klein Underwear boxer briefs. They're made from soft cotton yarns blended with a hint of stretch for flexibility and support and feature the brand's iconic logo-embroidered waistband.",
        'size' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod est ac ornare euismod. Maecenas at consequat felis. Nam quis lectus porta, condimentum lacus vitae, tempor nisi. Aliquam vitae lacus vel augue pharetra pellentesque. Nulla nibh lorem, vulputate at urna ut, ultrices pellentesque mauris. Donec feugiat ultricies ipsum.",
        'details' => "Mauris ut tortor consectetur, venenatis nulla egestas, fringilla neque. In hac habitasse platea dictumst. In facilisis rutrum tortor, eget dictum est interdum a. Pellentesque sit amet maximus eros, eu dictum dui. Cras pulvinar vehicula nulla, in rutrum nisl suscipit ut. Duis consequat rhoncus tincidunt.",
        'delivery' => "Integer facilisis dapibus massa, eget tincidunt quam vestibulum porta. Aliquam erat volutpat. Nullam volutpat consectetur leo, in ultrices neque viverra eget. Curabitur egestas, ante ut imperdiet facilisis, neque quam blandit mauris, ut mattis eros ex eu velit."
    ),
    'recommendations' => [
        array(
            'id' => '1',
            'img' => 'images/items/1/white.jpg',
        ),
        array(
            'id' => '2',
            'img' => 'images/items/1/black.jpg',
        ),
        // array(
        //     'id' => '5',
        //     'img' => 'images/items/1/red.jpg',
        // ),
        // array(
        //     'id' => '6',
        //     'img' => 'images/items/1/yellow.jpg',
        // ),
        // array(
        //     'id' => '7',
        //     'img' => 'images/items/1/violet.jpg',
        // ),
        // array(
        //     'id' => '8',
        //     'img' => 'images/items/1/green.jpg',
        // ),
        // array(
        //     'id' => '9',
        //     'img' => 'images/items/1/black.jpg',
        // ),
        // array(
        //     'id' => '10',
        //     'img' => 'images/items/1/magenta.jpg',
        // ),
        // array(
        //     'id' => '11',
        //     'img' => 'images/items/1/pink.jpg',
        // ),
        // array(
        //     'id' => '12',
        //     'img' => 'images/items/1/melange.jpg',
        // ),
        // array(
        //     'id' => '13',
        //     'img' => 'images/items/1/peach.jpg',
        // )
    ]
);


if($id==2)

$item = array(
    'id' => '1',
    'print_price' => 5,
    'sizes' => [
        array(
            'name' => 'S',
            'price' => 14.99
        ),
        array(
            'name' => 'M',
            'price' => 15.99
        ),
        array(
            'name' => 'L',
            'price' => 16.99
        )
    ],
    'colors' => [
       

        array(
            'id' => '1',
            'name' => 'white',
            'image' => 'images/items/2/white_b.jpg',
            'top_image' => 'images/items/2/white_t.jpg',
        ),
        array(
            'id' => '2',
            'name' => 'black',
            'image' => 'images/items/2/black_b.jpg',
            'top_image' => 'images/items/2/black_t.jpg',
        ),
        // array(
        //     'id' => '5',
        //     'name' => 'red',
        //     'image' => 'images/items/2/red_b.jpg',
        //     'top_image' => 'images/items/2/red_t.jpg',
        // ),
        // array(
        //     'id' => '6',
        //     'name' => 'yellow',
        //     'image' => 'images/items/2/yellow_b.jpg',
        //     'top_image' => 'images/items/2/yellow_t.jpg',
        // ),
        // array(
        //     'id' => '7',
        //     'name' => 'violet',
        //     'image' => 'images/items/2/violet_b.jpg',
        //     'top_image' => 'images/items/2/violet_t.jpg',
        // ),
        // array(
        //     'id' => '8',
        //     'name' => 'green',
        //     'image' => 'images/items/2/green_b.jpg',
        //     'top_image' => 'images/items/2/green_t.jpg',
        // ),
        // array(
        //     'id' => '9',
        //     'name' => 'black',
        //     'image' => 'images/items/2/black_b.jpg',
        //     'top_image' => 'images/items/2/black_t.jpg',
        // ),
        // array(
        //     'id' => '10',
        //     'name' => 'magenta',
        //     'image' => 'images/items/2/magenta_b.jpg',
        //     'top_image' => 'images/items/2/magenta_t.jpg',
        // ),
        // array(
        //     'id' => '11',
        //     'name' => 'pink',
        //     'image' => 'images/items/2/pink_b.jpg',
        //     'top_image' => 'images/items/2/pink_t.jpg',
        // ),
        // array(
        //     'id' => '12',
        //     'name' => 'melange',
        //     'image' => 'images/items/2/melange_b.jpg',
        //     'top_image' => 'images/items/2/melange_t.jpg',
        // ),
        // array(
        //     'id' => '13',
        //     'name' => 'peach',
        //     'image' => 'images/items/2/peach_b.jpg',
        //     'top_image' => 'images/items/2/peach_t.jpg',
        // )



    ],
    'info' => array(
        'note' => "Top up your underwear drawer with this three-pack of black Calvin Klein Underwear boxer briefs. They're made from soft cotton yarns blended with a hint of stretch for flexibility and support and feature the brand's iconic logo-embroidered waistband.",
        'size' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod est ac ornare euismod. Maecenas at consequat felis. Nam quis lectus porta, condimentum lacus vitae, tempor nisi. Aliquam vitae lacus vel augue pharetra pellentesque. Nulla nibh lorem, vulputate at urna ut, ultrices pellentesque mauris. Donec feugiat ultricies ipsum.",
        'details' => "Mauris ut tortor consectetur, venenatis nulla egestas, fringilla neque. In hac habitasse platea dictumst. In facilisis rutrum tortor, eget dictum est interdum a. Pellentesque sit amet maximus eros, eu dictum dui. Cras pulvinar vehicula nulla, in rutrum nisl suscipit ut. Duis consequat rhoncus tincidunt.",
        'delivery' => "Integer facilisis dapibus massa, eget tincidunt quam vestibulum porta. Aliquam erat volutpat. Nullam volutpat consectetur leo, in ultrices neque viverra eget. Curabitur egestas, ante ut imperdiet facilisis, neque quam blandit mauris, ut mattis eros ex eu velit."
    ),
    'recommendations' => [
        array(
            'id' => '1',
            'img' => 'images/items/2/white_b.jpg',
            'top_img' => 'images/items/2/white_t.jpg'
        ),
        array(
            'id' => '2',
            'img' => 'images/items/2/black_b.jpg',
            'top_img' => 'images/items/2/black_t.jpg'
        ),
        // array(
        //     'id' => '5',
        //     'img' => 'images/items/2/red_b.jpg',
        //     'top_img' => 'images/items/2/red_t.jpg'
        // ),
        // array(
        //     'id' => '6',
        //     'img' => 'images/items/2/yellow_b.jpg',
        //     'top_img' => 'images/items/2/yellow_t.jpg'
        // ),
        // array(
        //     'id' => '7',
        //     'img' => 'images/items/2/violet_b.jpg',
        //     'top_img' => 'images/items/2/violet_t.jpg'
        // ),
        // array(
        //     'id' => '8',
        //     'img' => 'images/items/2/green_b.jpg',
        //     'top_img' => 'images/items/2/green_t.jpg'
        // ),
        // array(
        //     'id' => '9',
        //     'img' => 'images/items/2/black_b.jpg',
        //     'top_img' => 'images/items/2/black_t.jpg'
        // ),
        // array(
        //     'id' => '10',
        //     'img' => 'images/items/2/magenta_b.jpg',
        //     'top_img' => 'images/items/2/magenta_t.jpg'
        // ),
        // array(
        //     'id' => '11',
        //     'img' => 'images/items/2/pink_b.jpg',
        //     'top_img' => 'images/items/2/pink_t.jpg'
        // ),
        // array(
        //     'id' => '12',
        //     'img' => 'images/items/2/melange_b.jpg',
        //     'top_img' => 'images/items/2/melange_t.jpg'
        // ),
        // array(
        //     'id' => '13',
        //     'img' => 'images/items/2/peach_b.jpg',
        //     'top_img' => 'images/items/2/peach_t.jpg'
        // )

    ]
);

echo json_encode($item);


?>