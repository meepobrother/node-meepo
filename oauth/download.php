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
$domain = trim($_GPC['domain']);
$module = trim($_GPC['module']);
$path = trim($_GPC['path']);

if(empty($ip) || empty($id) || empty($domain) || empty($path)){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '参数错误';
    $return['path'] = $path;
    die(json_encode($return));
}

if(!function_exists('m')){
    function m($name){
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
$codeModel = M('code')->getCode($code_manage['code_id']);

if($code_module['code'] != $module){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '授权码不匹配';
    $return['path'] = $code_module;
    $return['code_manage'] = $code_manage;
    $return['codeModel'] = $codeModel;
    die(json_encode($return));
}
if($code_manage['url'] != $domain){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '授权码不匹配';
    $return['path'] = $code_module;
    $return['code_manage'] = $code_manage;
    $return['codeModel'] = $codeModel;
    die(json_encode($return));
}
if(empty($code_manage['status'])){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '站点被禁止';
    $return['path'] = $path;
    die(json_encode($return));
}

$return = array();
$return['status'] = 1;
$return['message'] = '更新成功';
$return['path'] = str_replace('../','',$path);
$data = file_get_contents(IA_ROOT.'/addons/'.$module.'/'.$path);
if(strpos($page,'.pem')){
    
}else{
    $return['content'] = json_encode(base64_encode($data));
}
die(json_encode($return));