<?php
global $modules;
$admin = array();
$index = array();
$post = array();
$home = array();

$module = array();
$module['title'] = 'IM聊天';
$module['code'] = 'imeepos_runner_plugin_im';

$menu = array();
$menu['title'] = '客户管理';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/im/member';
$menu['link'] = $link;
$module['admin'][] = $menu;

$menu = array();
$menu['title'] = '我的消息';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/im/index';
$menu['link'] = $link;
$home[] = $menu;

$module['home'] = $home;

$index = array();
$menu = array();
$menu['title'] = '我的消息';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/im/index';
$menu['link'] = $link;
$index[] = $menu;
$menu = array();
$menu['title'] = '附近的人';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/im/friend';
$menu['link'] = $link;
$index[] = $menu;

$module['index'] = $index;

$post = array();
$module['post'] = $post;

$assistive = array();
$menu = array();
$menu['title'] = '聊天';	
$menu['icon'] = 'message-icon';
$link = array();
$link[] = '/im/index';
$menu['link'] = $link;
$assistive[] = $menu;

$module['assistive'] = $assistive;

$modules[] = $module;