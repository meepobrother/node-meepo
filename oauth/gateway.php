<?php

require('../../../framework/bootstrap.inc.php');


$data = array();
$data = $_GPC;
die(serialize($data));