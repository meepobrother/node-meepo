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

if(empty($manages)){
    $data = array();
    // M('manage')->update($data);
    $return  = array();
    $return['status'] = 0;
    $return['data'] = $data;
    die(json_encode($return));
}else{
    $menus = array();
    $freeGrids = array();
    $v10Grids = array();
	$otherGrids = array();
	$payGrids = array();

	$menu = array();
    $home = array();
    $footer = array();
    $index = array();
    $post = array();

    foreach($manages as $manage){
    	if(!empty($manage['moduleId'])){
    		$module_id = intval($manage['moduleId']);
    		$module = pdo_get('imeepos_oauth2_module',array('id'=>$module_id));
    		if(!empty($module)){
    			if($module['code'] == 'imeepos_runner'){
    				//第一个菜单
    				$menu = array();
    				$menu['title'] = '帮我送';
    				$menu['icon'] = 'assets/images/song.png';
    				$link = array();
    				$link[] = '/runner/song/index';
    				$menu['link'] = $link;
    				$freeGrids[] = $menu;

    				$menu = array();
    				$menu['title'] = '帮我买';
    				$menu['icon'] = 'assets/images/buy.png';
    				$link = array();
    				$link[] = '/runner/buy/index';
    				$menu['link'] = $link;
    				$freeGrids[] = $menu;

    				$menu = array();
    				$menu['title'] = '帮帮忙';
    				$menu['icon'] = 'assets/images/help.png';
    				$link = array();
    				$link[] = '/runner/help/index';
    				$menu['link'] = $link;
    				$freeGrids[] = $menu;

    				//第二个菜单
    				$menu = array();
    				$menu['title'] = '消息短息';
    				$menu['icon'] = 'assets/images/admin-index-xiaoxi.png';
    				$link = array();
    				$link[] = '/admin/sms-log';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '模板装修';
    				$menu['icon'] = 'assets/images/admin-index-zhuangxiu.png';
    				$link = array();
    				$link[] = '/admin/design';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;


    				$menu = array();
    				$menu['title'] = '跑腿认证';
    				$menu['icon'] = 'assets/images/admin-index-renzheng.png';
    				$link = array();
    				$link[] = '/services/runner';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '系统设置';
    				$menu['icon'] = 'assets/images/admin-index-setting.png';
    				$link = array();
    				$link[] = '/admin/setting';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '财务对账';
    				$menu['icon'] = 'assets/images/admin-index-caiwu.png';
    				$link = array();
    				$link[] = '/admin/money';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '派单指派';
    				$menu['icon'] = 'assets/images/admin-index-paidan.png';
    				$link = array();
    				$link[] = '/runner/tasks/index';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;


    				$menu = array();
    				$menu['title'] = '余额提现';
    				$menu['icon'] = 'assets/images/tixian-icon.png';
    				$link = array();
    				$link[] = '/admin/tixian';
    				$menu['link'] = $link;
    				$otherGrids[] = $menu;

                    $menu = array();
                    $menu['title'] = '我的地址';
                    $menu['icon'] = 'assets/images/tixian-icon.png';
                    $link = array();
                    $link[] = '/runner/home/my-address';
                    $menu['link'] = $link;
                    $home[] = $menu;

                    $menu = array();
                    $menu['title'] = '我发布的';
                    $menu['icon'] = 'assets/images/tixian-icon.png';
                    $link = array();
                    $link[] = '/runner/my-order';
                    $menu['link'] = $link;
                    $home[] = $menu;

                    $menu = array();
                    $menu['title'] = '我接收的';
                    $menu['icon'] = 'assets/images/tixian-icon.png';
                    $link = array();
                    $link[] = '/runner/my-recive';
                    $menu['link'] = $link;
                    $home[] = $menu;

                    $menu = array();
                    $menu['title'] = '余额提现';
                    $menu['icon'] = 'assets/images/tixian-icon.png';
                    $link = array();
                    $link[] = '/tixian/post';
                    $menu['link'] = $link;
                    $home[] = $menu;

                    $menu = array();
                    $menu['title'] = '提现记录';
                    $menu['icon'] = 'assets/images/tixian-icon.png';
                    $link = array();
                    $link[] = '/tixian/log';
                    $menu['link'] = $link;
                    $home[] = $menu;
    			}

    			if($module['code'] == 'imeepos_runner_plugin_im'){
    				$menu = array();
    				$menu['title'] = '客户管理';
    				$menu['icon'] = 'assets/images/im/icon.png';
    				$link = array();
    				$link[] = '/im/member';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

                    $menu = array();
                    $menu['title'] = '我的消息';
                    $menu['icon'] = 'assets/images/im/icon.png';
                    $link = array();
                    $link[] = '/im/index';
                    $menu['link'] = $link;
                    $home[] = $menu;
    			}

    			if($module['code'] == 'imeepos_coach'){
    				$menu = array();
    				$menu['title'] = '教练管理';
    				$menu['icon'] = 'assets/images/coach/teacher.png';
    				$link = array();
    				$link[] = '/coach/admin/teacher';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '课程管理';
    				$menu['icon'] = 'assets/images/coach/lesson.png';
    				$link = array();
    				$link[] = '/coach/admin/lesson';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '器材管理';
    				$menu['icon'] = 'assets/images/coach/qicai.png';
    				$link = array();
    				$link[] = '/coach/admin/seat';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

    				$menu = array();
    				$menu['title'] = '预约管理';
    				$menu['icon'] = 'assets/images/coach/coach.png';
    				$link = array();
    				$link[] = '/coach/admin/manage';
    				$menu['link'] = $link;
    				$v10Grids[] = $menu;

                    $menu = array();
                    $menu['title'] = '我的预约';
                    $menu['icon'] = 'assets/images/coach/coach.png';
                    $link = array();
                    $link[] = '/coach/log';
                    $menu['link'] = $link;
                    $v10Grids[] = $menu;

    			}

                if($module['code'] == 'imeepos_runner_plugin_bbs'){
                    $menu = array();
                    $menu['title'] = '帖子管理';
                    $menu['icon'] = 'assets/images/coach/teacher.png';
                    $link = array();
                    $link[] = '/bbs/admin/topics';
                    $menu['link'] = $link;
                    $v10Grids[] = $menu;

                    $menu = array();
                    $menu['title'] = '版主管理';
                    $menu['icon'] = 'assets/images/coach/teacher.png';
                    $link = array();
                    $link[] = '/bbs/admin/managers';
                    $menu['link'] = $link;
                    $v10Grids[] = $menu;

                    $menu = array();
                    $menu['title'] = '我的帖子';
                    $menu['icon'] = 'assets/images/im/icon.png';
                    $link = array();
                    $link[] = '/im/index';
                    $menu['link'] = $link;
                    $home[] = $menu;

                    $menu = array();
                    $menu['title'] = '我的回复';
                    $menu['icon'] = 'assets/images/im/icon.png';
                    $link = array();
                    $link[] = '/im/index';
                    $menu['link'] = $link;
                    $home[] = $menu;
                }
    		}
    	}
    }
    $admin = array();
    $admin['freeGrids'] = $freeGrids;
    $admin['v10Grids'] = $v10Grids;
    $admin['otherGrids'] = $otherGrids;
    $admin['payGrids'] = $payGrids;

    $menus['admin'] = $admin;
    $menus['home'] = $home;
    $menus['index'] = $index;
    $menus['footer'] = $footer;
    $menus['post'] = $post;

    $return['status'] = 1;
    $return['message'] = '授权成功';
    $return['data'] = $menus;
    die(json_encode($return));
}
