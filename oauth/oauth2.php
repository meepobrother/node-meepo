<?php
/**
 * Created by imeepos.
 * User: imeepos
 * Date: 2016/6/30
 * Time: 15:52
 */
require('../../../framework/bootstrap.inc.php');
if(!function_exists('m')){
    function M($name){
        static $model = array();
        if(empty($model[$name])) {
            include IA_ROOT.'/addons/imeepos_oauth2/model/'.$name.'.php';
            $model[$name] = new $name();
        }
        return $model[$name];
    }
}
global $_W,$_GPC;
header("Access-Control-Allow-Origin:*");
$_GPC['do'] = 'index';
$input = $_GPC['__input'];
$domain = trim($input['domain']);
$code = trim($input['code']);
$ip = trim($input['ip']);
if(empty($domain)){
    $data = array();
    $data['status'] = -1;
    $data['message'] = '请联系作者购买正版模块，作者扣扣1037483576';
    die(json_encode($data));
}
if(empty($code)){
    $data = array();
    $data['status'] = -1;
    $data['message'] = '请联系作者购买正版模块，作者扣扣1037483576';
    die(json_encode($data));
}
$module = M('module')->getCode($code);
if(empty($module)){
    $data = array();
    $data['status'] = -1;
    $data['message'] = '请联系作者购买正版模块，作者扣扣1037483576';
    die(json_encode($data));
}
$manage = M('manage')->getUrl($domain,$module['id']);
if(empty($manage)){
    $data = array();
    $data['status'] = -1;
    $data['message'] = '请联系作者购买正版模块，作者扣扣1037483576';
    die(json_encode($data));
}
$code = M('code')->getInfo($manage['codeId']);

if(empty($code)){
    $data = array();
    $data['status'] = -1;
    $data['message'] = '请联系作者购买正版模块，作者扣扣1037483576';
    die(json_encode($data));
}

die(json_encode($code));