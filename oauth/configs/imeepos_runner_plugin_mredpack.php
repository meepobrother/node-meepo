<?php

global $modules;
$admin = array();
$index = array();
$post = array();
$home = array();

$module = array();
$module['title'] = '地图红包';
$module['code'] = 'imeepos_runner_plugin_mredpack';

$module['admin'] = $admin;
$module['home'] = $home;

$index = array();
$menu = array();
$menu['title'] = '地图红包';
$menu['icon'] = 'assets/images/im/icon.png';
$link = array();
$link[] = '/mredpack/map';
$menu['link'] = $link;
$index[] = $menu;
$module['index'] = $index;

$post = array();
$module['post'] = $post;

$modules[] = $module;