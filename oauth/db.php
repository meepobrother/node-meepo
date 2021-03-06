<?php
/**
 * Created by imeepos.
 * User: imeepos
 * Date: 2016/6/30
 * Time: 15:57
 */
require('../../../framework/bootstrap.inc.php');
global $_W,$_GPC;
load()->func('db');

$ip = trim($_GPC['ip']);
$id = trim($_GPC['id']);
$domain = trim($_GPC['domain']);
$module = trim($_GPC['module']);

if(empty($ip) || empty($id) || empty($domain)){
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
    die(json_encode($return));
}
if($code_manage['url'] != $domain){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '授权码不匹配';
    $return['path'] = $path;
    die(json_encode($return));
}
if(empty($code_manage['status'])){
    $return  = array();
    $return['status'] = 0;
    $return['message'] = '站点被禁止';
    $return['path'] = $path;
    die(json_encode($return));
}

$tables = M('tables')->getAll(array('module_id'=>$code_module['id']));
$schemas = array();
if(!empty($tables)){
    foreach ($tables as $table) {
        $schema = db_table_schema(pdo(),$table['name']);
        $schema['tablename'] = str_replace('ims_','',$schema['tablename']);
        $schemas[] = $schema;
    }
}
$schemas = iserializer($schemas);
$schemas = @base64_encode($schemas);
$data = array();
$data['status'] = 1;
$data['data'] = $schemas;
die(json_encode($data));
