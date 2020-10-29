<?php

$recepient = "tvoyavolshebnaya.rybalka3d@yandex.ru";
$siteName = "MagicFishing";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$mail = trim($_POST["mail"]);
$address = trim($_POST["address"]);
$promocode = trim($_POST["promocode"]);


$tovar = trim($_POST["tovar"]);
$summ = trim($_POST["summ"]);



if($tovar === '') {
	$message = '
		<table style="width:100%;border-spacing:3px;">
		    <tr>
		        <td style="font-weight:bold; font-size:20px; padding-bottom:22px;" colspan=2>
		            Заявка
		        </td>
		    </tr>
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Имя</td>
		        <td style="border: 1px solid #E8E8E8;">' . $name . '</td>
		    </tr> 
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Телефон</td>
		        <td style="border: 1px solid #E8E8E8;">' . $phone . '</td>
		    </tr>
		    
		</table>
	';
} else {
	$message = '
		<table style="width:100%;border-spacing:3px;">
		    <tr>
		        <td style="font-weight:bold; font-size:20px; padding-bottom:22px;" colspan=2>
		            Заказ товара'. $tovar .' на сумму ' . $summ . ' р
		        </td>
		    </tr>
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Имя</td>
		        <td style="border: 1px solid #E8E8E8;">' . $name . '</td>
		    </tr> 
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Телефон</td>
		        <td style="border: 1px solid #E8E8E8;">' . $phone . '</td>
		    </tr>
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Email</td>
		        <td style="border: 1px solid #E8E8E8;">' . $mail . '</td>
		    </tr>
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Адрес</td>
		        <td style="border: 1px solid #E8E8E8;">' . $address . '</td>
		    </tr>
		    <tr>
		        <td style="background:#E8E8E8; padding:8px 5px;">Промокод</td>
		        <td style="border: 1px solid #E8E8E8;">' . $promocode . '</td>
		    </tr>
		</table>
	';
}


$pagetitle = "Новая заявка: " . $phone;
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");

?>