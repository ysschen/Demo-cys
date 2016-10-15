<?php
	//header('Access-Control-Allow-Origin:*');
	$apiKey = "c75ba576f50ddaa5fd2a87615d144ecf";
	$apiUrl = "http://www.tuling123.com/openapi/api?key=KEY&info=INFO";
	header("Content-type: text/html; charset=utf-8");
	//http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=INFO
	$reqInfo = $_GET['abc'];
	$url = str_replace("INFO",$reqInfo,str_replace("KEY",$apiKey,$apiUrl));
	$res = file_get_contents($url);
	echo $_GET['callback']."(".$res.")";
?>