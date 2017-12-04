<?php
global $modules;
$admin = array();
$index = array();
$post = array();
$home = array();

$module = array();
$module['title'] = '会员卡';
$module['code'] = 'imeepos_runner_plugin_card';

$menu = array();
$menu['title'] = '会员卡设置';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/card/add';
$menu['link'] = $link;
$module['admin'][] = $menu;

$menu = array();
$menu['title'] = '我的会员卡';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/card/index';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '积分兑换';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/card/recharge';
$menu['link'] = $link;
$home[] = $menu;

$menu = array();
$menu['title'] = '我的礼品';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/card/log';
$menu['link'] = $link;
$home[] = $menu;

$module['home'] = $home;

$index = array();
$module['index'] = $index;

$post = array();
$module['post'] = $post;

$modules[] = $module;