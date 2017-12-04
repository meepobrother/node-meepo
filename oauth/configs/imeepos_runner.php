<?php
global $modules;
$module = array();
$module['title'] = '跑腿';
$module['code'] = 'imeepos_runner';

//管理
$module['admin'] = array();

$menu = array();
$menu['title'] = '消息短息';
$menu['icon'] = 'assets/images/admin-index-xiaoxi.png';
$link = array();
$link[] = '/admin/sms-log';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '模板装修';
$menu['icon'] = 'assets/images/admin-index-zhuangxiu.png';
$link = array();
$link[] = '/admin/design';
$menu['link'] = $link;
$admin[] = $menu;


$menu = array();
$menu['title'] = '系统设置';
$menu['icon'] = 'assets/images/admin-index-setting.png';
$link = array();
$link[] = '/admin/setting';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '财务对账';
$menu['icon'] = 'assets/images/admin-index-caiwu.png';
$link = array();
$link[] = '/admin/money';
$menu['link'] = $link;
$admin[] = $menu;


$menu = array();
$menu['title'] = '派单指派';
$menu['icon'] = 'assets/images/admin-index-paidan.png';
$link = array();
$link[] = '/core/index';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '余额提现';
$menu['icon'] = 'assets/images/tixian-icon.png';
$link = array();
$link[] = '/admin/tixian';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '跑腿管理';
$menu['icon'] = 'assets/images/runner/runner-icon.png';
$link = array();
$link[] = '/admin/runner';
$menu['link'] = $link;
$admin[] = $menu;

$module['admin'] = $admin;

//个人中心
$home = array();

$menu = array();
$menu['title'] = '我的地址';
$menu['icon'] = 'assets/images/my-address.png';
$link = array();
$link[] = '/runner/home/my-address';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我发布的';
$menu['icon'] = 'assets/images/my-order.png';
$link = array();
$link[] = '/runner/my-order';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我接收的';
$menu['icon'] = 'assets/images/my-recive.png';
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
$module['home'] = $home;

//首页大厅

$index = array();
$menu = array();
$menu['title'] = '任务大厅';
$menu['icon'] = 'assets/images/song.png';
$link = array();
$link[] = '/core/index';
$menu['link'] = $link;
$index[] = $menu;

$menu = array();
$menu['title'] = '发布任务';
$menu['icon'] = 'assets/images/buy.png';
$link = array();
$link[] = '/core/post';
$menu['link'] = $link;
$index[] = $menu;

$menu = array();
$menu['title'] = '地图发单';
$menu['icon'] = 'assets/images/help.png';
$link = array();
$link[] = '/core/map';
$menu['link'] = $link;
$index[] = $menu;

$menu = array();
$menu['title'] = '个人中心';
$menu['icon'] = 'assets/images/help.png';
$link = array();
$link[] = '/home/home';
$menu['link'] = $link;
$index[] = $menu;
$module['index'] = $index;


//发布
$post = array();
$module['post'] = $post;


$assistive = array();
$menu = array();
$menu['title'] = '首页';	
$menu['icon'] = 'index-icon';
$link = array();
$link[] = '/core/index';
$menu['link'] = $link;
$assistive[] = $menu;

$menu = array();
$menu['title'] = '发布';	
$menu['icon'] = 'post-icon';
$link = array();
$link[] = '/core/post';
$menu['link'] = $link;
$assistive[] = $menu;


$menu = array();
$menu['title'] = '我的';	
$menu['icon'] = 'mine-icon';
$link = array();
$link[] = '/runner/home/index';
$menu['link'] = $link;
$assistive[] = $menu;

$module['assistive'] = $assistive;





$modules[] = $module;