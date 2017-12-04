<?php
global $modules;
$module = array();
$module['title'] = '同城圈';
$module['code'] = 'imeepos_runner_plugin_bbs';

$post = array();
$admin = array();
$index = array();
$home = array();

$menu = array();
$menu['title'] = '帖子管理';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/topics';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '版主管理';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/managers';
$menu['link'] = $link;
$admin[] = $menu;


$menu = array();
$menu['title'] = '我的帖子';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-topic';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我的回复';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-reply';
$menu['link'] = $link;
$home[] = $menu;


$menu = array();
$menu['title'] = '同城信息';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/index';
$menu['link'] = $link;
$index[] = $menu;


$menu = array();
$menu['title'] = '发布信息';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/post';
$menu['link'] = $link;
$menu['code'] = 'bbs';
$menu['type'] = '31'; //8是帖子
$post[] = $menu;


$module['post'] = $post;
$module['admin'] = $admin;

$module['index'] = $index;
$module['home'] = $home;

$modules[] = $module;