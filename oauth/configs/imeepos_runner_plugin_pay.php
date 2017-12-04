<?php
global $modules;
$module = array();
$module['title'] = '支付设置';
$module['code'] = 'imeepos_runner_plugin_pay';

$post = array();
$admin = array();
$index = array();
$home = array();

$menu = array();
$menu['title'] = '微信支付';
$menu['icon'] = 'assets/images/pay/wechat.png';
$link = array();
$link[] = '';
$menu['link'] = $link;
$menu['tag'] = '关闭';
$menu['type'] = 'wechat';
$admin[] = $menu;

$menu = array();
$menu['title'] = '余额支付';
$menu['icon'] = 'assets/images/pay/credit.png';
$link = array();
$link[] = '';
$menu['link'] = $link;
$menu['tag'] = '关闭';
$menu['type'] = 'credit';
$admin[] = $menu;


$menu = array();
$menu['title'] = '货到付款';
$menu['icon'] = 'assets/images/pay/divider.png';
$link = array();
$link[] = '';
$menu['link'] = $link;
$menu['tag'] = '关闭';
$menu['type'] = 'divider';
$admin[] = $menu;

$module['post'] = $post;
$module['admin'] = $admin;
$module['index'] = $index;
$module['home'] = $home;

$modules[] = $module;