<?php

/**
* 更新文件md5检测是否变动
*/

require('../../../framework/bootstrap.inc.php');

$module = trim($_GPC['module']);
set_time_limit(0);
my_scandir(IA_ROOT.'/addons/'.$module.'/');
$files =array();
foreach($my_scenfiles as $sf){
    $path = str_replace(IA_ROOT.'/addons/'.$module."/","",$sf);
    if($path == '/manifest.xml' || strpos($path,'version' || $path == '/site.php')){

    }else{
        $files[] =array('path' => $path, 'md5'=> md5_file($sf));
    }
}
$files[] = array('path' => '/site.php', 'md5'=> md5_file(IA_ROOT.'/addons/'.$module.'/site.php'));
$versionfile = IA_ROOT."/addons/".$module."/version.php";
if(file_exists($versionfile)){
    require_once $versionfile;
}else{
    define('VERSION','1.0.0');
}

$data = json_encode($files);
$data = serialize($data);
// print_r($data);

load()->func('file');

$tmpdir = IA_ROOT.'/addons/imeepos_oauth2/updates/'.$module.'/';
if(!is_dir($tmpdir)){
    mkdirs($tmpdir);
}


$file = IA_ROOT.'/addons/imeepos_oauth2/updates/'.$module.'/'.VERSION.'.text';

file_put_contents($file, $data);


die('success');

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


function listDir($dir){
    $dir .= substr($dir, -1) == '/' ? '' : '/';
    $dirInfo = array();
    foreach (glob($dir.'*') as $v) {
        $dirInfo[] = $v; 
        if(is_dir($v)){
            $dirInfo = array_merge($dirInfo, listDir($v));
        }
    }
    return $dirInfo;
}

