<?php
global $modules;
$module = array();
$module['title'] = '汽车维修工单';
$module['code'] = 'imeepos_runner_plugin_repair';

$post = array();
$admin = array();
$index = array();
$home = array();

$menu = array();
$menu['title'] = '工单管理';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/topics';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '员工管理';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/managers';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '员工绩效';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/managers';
$menu['link'] = $link;
$admin[] = $menu;

$menu = array();
$menu['title'] = '推广分红';
$menu['icon'] = 'assets/images/coach/teacher.png';
$link = array();
$link[] = '/bbs/admin/managers';
$menu['link'] = $link;
$admin[] = $menu;


$menu = array();
$menu['title'] = '我的汽车';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-topic';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我的工单';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-reply';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '汽车维修';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-reply';
$menu['link'] = $link;
$menu['code'] = 'carsRepair';
$menu['type'] = 21; // 汽车维修
$post[] = $menu;

$menu = array();
$menu['title'] = '维修工单';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/bbs/my-reply';
$menu['link'] = $link;
$index[] = $menu;


$module['post'] = $post;
$module['admin'] = $admin;
$module['index'] = $index;
$module['home'] = $home;

$modules[] = $module;