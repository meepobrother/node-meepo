<?php

require('../../../framework/bootstrap.inc.php');

$ip = trim($_GPC['ip']);
$id = trim($_GPC['id']);
$domain = trim($_GPC['domain']);

if(empty($domain) || empty($id) || empty($ip)){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '参数错误';
    die(json_encode($return));
}

if(!function_exists('M')){
    function M($name){
        static $model = array();
        if(empty($model[$name])) {
            include IA_ROOT.'/addons/imeepos_oauth2/model/'.$name.'.php';
            $model[$name] = new $name();
        }
        return $model[$name];
    }
}

//授权码
$manages = pdo_getall('imeepos_oauth2_manage',array('url'=>$domain));

$exist = strpos($domain, 'www.') !== false;
if($exist){
    if(empty($manages)){
        $domain = str_replace('www.', '', $domain);
        $manages = pdo_getall('imeepos_oauth2_manage',array('url'=>$domain));
    }
}else{
    if(empty($manages)){
        $domain = 'www.'.$domain;
        $manages = pdo_getall('imeepos_oauth2_manage',array('url'=>$domain));
    }
}

if(empty($manages)){
    $data = array();
    // M('manage')->update($data);
    $return  = array();
    $return['status'] = 0;
    $return['data'] = $data;
    die(json_encode($return));
}else{
    $menus = array();
    global $modules;
    foreach($manages as $manage){
    	if(!empty($manage['moduleId'])){
    		$module_id = intval($manage['moduleId']);
    		$module = pdo_get('imeepos_oauth2_module',array('id'=>$module_id));
    		if(!empty($module)){
    			if($module['code'] == 'imeepos_runner'){
                    require("./configs/imeepos_runner.php");
    			}
    			if($module['code'] == 'imeepos_runner_plugin_im'){
    				require('./configs/imeepos_runner_plugin_im.php');
    			}
    			if($module['code'] == 'imeepos_coach'){
    				require('./configs/imeepos_coach.php');
    			}
                if($module['code'] == 'imeepos_runner_plugin_bbs'){
                    require('./configs/imeepos_runner_plugin_bbs.php');
                }
                if($module['code'] == 'imeepos_runner_plugin_repair'){
                    require('./configs/imeepos_runner_plugin_repair.php');
                }
                if($module['code'] == 'imeepos_runner_plugin_card'){
                    require('./configs/imeepos_runner_plugin_card.php');
                }
                if($module['code'] == 'imeepos_runner_plugin_mredpack'){
                    require('./configs/imeepos_runner_plugin_mredpack.php');
                }
    		}
    	}
    }
    require('./configs/imeepos_runner_plugin_pay.php');

    $return['status'] = 1;
    $return['message'] = '授权成功';
    $return['data'] = $modules;
    die(json_encode($return));
}
