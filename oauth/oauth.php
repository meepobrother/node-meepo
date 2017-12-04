<?php
/**
 * Created by imeepos.
 * User: imeepos
 * Date: 2016/6/30
 * Time: 15:52
 */
require('../../../framework/bootstrap.inc.php');

$ip = trim($_GPC['ip']);
$id = trim($_GPC['id']);
$code = trim($_GPC['code']);
$domain = trim($_GPC['domain']);
$module = trim($_GPC['module']);

if(empty($domain) || empty($id) || empty($ip) || empty($module)){
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
$code_module = M('module')->getCode($module);
$code_manage = M('manage')->getUrl($domain,$code_module['id']);
$codeModel = M('code')->getCode($code_manage['codeId']);

if(empty($code_manage)){
    $data = array();
    $data['url'] = $domain;
    $data['status'] = 0;
    $data['moduleId'] = $code_module['id'];
    $data['create_time'] = time();
    // M('manage')->update($data);
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '未授权版本';
    $return['data'] = $data;
    die(json_encode($return));
}else{
    $data = array();
    $data['url'] = $domain;
    $data['moduleId'] = $code_module['id'];
    $data['create_time'] = time();
    $data['id'] = $code_manage['id'];
    // M('manage')->update($data);

    if(empty($code_manage['codeId'])){
        $return  = array();
        $return['status'] = 0;
        $return['message'] = '未授权版本';
        $return['data'] = $data;
        die(json_encode($return));
    }else{
        $code = M('code')->getInfo($code_manage['codeId']);
        $return  = array();
        $return['status'] = 1;
        $return['message'] = '授权成功';
        $return['code'] = $code['code'];
        die(json_encode($return));
    }
}



