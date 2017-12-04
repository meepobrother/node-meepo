<?php
global $modules;
$module = array();
$module['title'] = '健身房';
$module['code'] = 'imeepos_coach';

$post = array();
$admin = array();
$index = array();
$home = array();


$menu = array();
$menu['title'] = '教练管理';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/coach/admin/teacher';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '课程管理';
$menu['icon'] = 'assets/images/coach/lesson.png';
$link = array();
$link[] = '/coach/admin/teacher';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '预约管理';
$menu['icon'] = 'assets/images/coach/coach.png';
$link = array();
$link[] = '/coach/admin/log';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '我的预约';
$menu['icon'] = 'assets/images/coach/coach.png';
$link = array();
$link[] = '/coach/log';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我是教练';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/coach/teacher-index';
$menu['link'] = $link;
$home[] = $menu;


$menu = array();
$menu['title'] = '预约私教';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/coach/teacher';
$menu['link'] = $link;
$index[] = $menu;

$menu = array();
$menu['title'] = '预约器材';
$menu['icon'] = 'assets/images/coach/qicai.png';
$link = array();
$link[] = '/coach/seat';
$menu['link'] = $link;
$index[] = $menu;

$menu = array();
$menu['title'] = '预约课程';
$menu['icon'] = 'assets/images/coach/lesson.png';
$link = array();
$link[] = '/coach/lesson';
$menu['link'] = $link;
$index[] = $menu;

$module['post'] = $post;
$module['admin'] = $admin;
$module['index'] = $index;
$module['home'] = $home;

$modules[] = $module;

