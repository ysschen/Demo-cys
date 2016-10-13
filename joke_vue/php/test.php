<?php
	// echo "插件";
	// echo $_GET['a'].$_GET['b'].'插件';
	echo $_GET['callback'].'('.json_encode(array('a'=>'b')).')';
?>