<?php

/**
 * Created by imeepos.
 * User: imeepos
 * Date: 2016/6/30
 * Time: 15:52
 */

require('../../../framework/bootstrap.inc.php');

// ini_set("display_errors", "On");
//     error_reporting(E_ALL | E_STRICT);
    
$ip = trim($_GPC['ip']);
$id = trim($_GPC['id']);
$domain = trim($_GPC['domain']);
$module = trim($_GPC['module']);

$files = trim($_GPC['files']);
$version = trim($_GPC['version']);

$dev = false;

if($dev){
    $ip = '';
    $id = 0;
    $domain = 'hask.com.cn';
    $module = 'imeepos_runner';
    $version = '1.0.0';
}

if(empty($ip) || empty($id) || empty($domain)){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '参数错误';
    $return['path'] = $path;
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
$codeModel = M('code')->getCode($code_manage['code_id']);

if($code_module['code'] != $module){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '授权码不匹配';
    $return['path'] = $code_module;
    $return['code_manage'] = $code_manage;
    $return['codeModel'] = $codeModel;
    $return['domain'] = $domain;
    die(json_encode($return));
}
if($code_manage['url'] != $domain){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '授权码不匹配';
    $return['path'] = $code_module;
    $return['code_manage'] = $code_manage;
    $return['codeModel'] = $codeModel;
    $return['domain'] = $domain;
    $return['domain'] = $domain;
    die(json_encode($return));
}
if(empty($code_manage['status'])){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '站点被禁止';
    $return['path'] = $path;
    die(json_encode($return));
}

$versionfile = IA_ROOT."/addons/".$module."/version.php";
if(file_exists($versionfile)){
    require_once $versionfile;
}else{
    define('VERSION','1.0.0');
}

if(VERSION == '0.0.0'){
    //开发调试版本
    $isupgrade = 1;
}else{
    $isupgrade = ver_compare(VERSION,$version);
}
if($isupgrade<0){
    $return = array();
    $return['status'] = $module == 'imeepos_supermen'?1:-1;
    $return['upgrade'] = $isupgrade;
    $data = file_get_contents(IA_ROOT.'/addons/'.$module.'/update.php');
    $return['upgrade'] = json_encode(base64_encode($data));
    $return['message'] = '当前版本为最新尊贵VIP顶级牛逼版';
    die(json_encode($return));
}

if($isupgrade==0){
    $return = array();
    $return['status'] = $module == 'imeepos_supermen'?1:-1;
    $return['upgrade'] = $isupgrade;
    $data = file_get_contents(IA_ROOT.'/addons/'.$module.'/update.php');
    $return['upgrade'] = json_encode(base64_encode($data));
    $return['message'] = '当前版本为最新尊贵VIP顶级牛逼版';
    die(json_encode($return));
}

$file = IA_ROOT.'/addons/imeepos_oauth2/updates/'.$module.'/'.VERSION.'.text';
if(file_exists($file)){
    $files = file_get_contents($file);
    $files = unserialize($files);
    $files = json_decode($files);
}else{
    $return = array();
    $return['status'] = $module == 'imeepos_supermen'?1:-1;
    $return['upgrade'] = $isupgrade;
    $data = file_get_contents(IA_ROOT.'/addons/'.$module.'/update.php');
    $return['upgrade'] = json_encode(base64_encode($data));
    $return['message'] = '正在升级中,请等待公告通知!';
    die(json_encode($return));
}

$return = array();
$return['status'] = 1;
$return['versionfile'] = $versionfile;
$return['files'] = $files;

$return['version'] = VERSION;

$return['message'] = '最新版本为'.$return['version'].',请及时更新';
$data = file_get_contents(IA_ROOT.'/addons/'.$module.'/update.php');
$return['upgrade'] = json_encode(base64_encode($data));
$return['log'] = '';

die(json_encode($return));

function my_scandir($dir) {
    global $my_scenfiles;
    $hasVender = false;
    if ($handle = opendir($dir)) {
        while (($file = readdir($handle)) !== false) {
            if ($file != ".." && $file != ".") {
                if (is_dir($dir . "/" . $file)) {
                    my_scandir($dir . "/" . $file);
                } else {
                    $my_scenfiles[] = $dir . "/" . $file;
                }
            }
        }
        closedir($handle);
    }
}