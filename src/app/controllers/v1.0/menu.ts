
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/menu')
export class MenuCtrl extends AddressBase {

    constructor() {
        super();
    }
    @Get()
    getList() {
        return menu;
    }
}


let menu = {
    "app": {
        "name": "米波同城",
        "description": "meepo city framework"
    },
    "user": {
        "name": "Admin",
        "avatar": "./assets/img/zorro.svg",
        "email": "cipchk@qq.com"
    },
    "menu": [{
        "text": "主导航",
        "translate": "main_navigation",
        "group": true,
        "children": [{
            "text": "指挥中心",
            "translate": "dashboard",
            "link": "/dashboard",
            "icon": "icon-speedometer",
            "acl": "imeepos_finish",
            "children": [{
                "text": "概述",
                "link": "/dashboard/v1",
                "translate": "dashboard_v1"
            }, {
                "text": "统计分析",
                "link": "/dashboard/analysis",
                "translate": "dashboard_analysis"
            }, {
                "text": "实时监控",
                "link": "/dashboard/monitor",
                "translate": "dashboard_monitor"
            }, {
                "text": "中控台",
                "link": "/dashboard/workplace",
                "translate": "dashboard_workplace"
            }]
        }, {
            "text": "店铺管理",
            "translate": "meepo-shop-manage",
            "group": true,
            "icon": "anticon anticon-shop",
            "children": [{
                "text": "所有店铺",
                "translate": "meepo-shop-all",
                "link": "/meepo/shops/list"
            }, {
                "text": "店铺分类",
                "translate": "meepo-shop-group",
                "link": "/meepo/shops/group"
            }]
        }, {
            "text": "会员管理",
            "translate": "meepo-member-manage",
            "group": true,
            "icon": "anticon anticon-user",
            "children": [{
                "text": "所有会员",
                "translate": "meepo-member-all",
                "link": "/meepo/member/list"
            }, {
                "text": "会员分组",
                "translate": "meepo-member-group",
                "link": "/meepo/member/group"
            }]
        }, {
            "text": "工单管理",
            "translate": "meepo-orders-manage",
            "group": true,
            "icon": "fa fa-reorder",
            "acl": "imeepos_runner_plugin_repair",
            "children": [{
                "text": "所有工单",
                "translate": "meepo-orders-all",
                "link": "/meepo/orders/list"
            }, {
                "text": "工单分类",
                "translate": "meepo-orders-group",
                "link": "/meepo/orders/group"
            }, {
                "text": "车检项目",
                "translate": "meepo-checks-list",
                "link": "/meepo/orders/checks"
            }, {
                "text": "维修项目",
                "translate": "meepo-services-list",
                "link": "/meepo/orders/services"
            }, {
                "text": "零部件管理",
                "translate": "meepo-goods-list",
                "link": "/meepo/orders/goods"
            }, {
                "text": "车辆管理",
                "translate": "meepo-carfiles-list",
                "link": "/meepo/orders/carfiles"
            }, {
                "text": "维修卡券",
                "translate": "meepo-cards-list",
                "link": "/meepo/orders/cards",
                "acl": "imeepos_finish"
            }, {
                "text": "工时统计",
                "translate": "meepo-emplyer-state",
                "link": "/meepo/orders/emplyer_state"
            }]
        }, {
            "text": "任务管理",
            "translate": "meepo-tasks-manage",
            "group": true,
            "icon": "fa fa-tasks",
            "acl": "imeepos_runner",
            "children": [{
                "text": "所有任务",
                "translate": "meepo-tasks-all",
                "link": "/meepo/tasks/list"
            }, {
                "text": "任务分类",
                "translate": "meepo-tasks-group",
                "link": "/meepo/tasks/group"
            }, {
                "text": "开通城市",
                "translate": "meepo-city-group",
                "link": "/meepo/tasks/city"
            }]
        }, {
            "text": "技能管理",
            "translate": "meepo-skills-manage",
            "group": true,
            "icon": "fa fa-star",
            "acl": "imeepos_runner",
            "children": [{
                "text": "所有技能",
                "translate": "meepo-skills-all",
                "link": "/meepo/skills/list"
            }, {
                "text": "技能分类",
                "translate": "meepo-skills-group",
                "link": "/meepo/skills/group"
            }]
        }, {
            "text": "同城社区",
            "translate": "meepo-topics-manage",
            "group": true,
            "icon": "anticon anticon-message",
            "acl": "meepo_bbs",
            "children": [{
                "text": "所有帖子",
                "translate": "meepo-topics-all",
                "link": "/meepo/topics/list"
            }, {
                "text": "板块管理",
                "translate": "meepo-topics-group",
                "link": "/meepo/topics/group"
            }]
        }, {
            "text": "互动吧",
            "translate": "meepo-actives-manage",
            "group": true,
            "icon": "anticon anticon-gift",
            "acl": "meepo_bar_free",
            "children": [{
                "text": "所有活动",
                "translate": "meepo-actives-all",
                "link": "/meepo/actives/list"
            }, {
                "text": "活动分类",
                "translate": "meepo-actives-group",
                "link": "/meepo/actives/group"
            }]
        }, {
            "text": "健身房",
            "translate": "meepo-lessons-manage",
            "group": true,
            "icon": "anticon anticon-calendar",
            "acl": "imeepos_coach",
            "children": [{
                "text": "所有课程",
                "translate": "meepo-lessons-all",
                "link": "/meepo/lessons/list"
            }, {
                "text": "课程分类",
                "translate": "meepo-lessons-group",
                "link": "/meepo/lessons/group"
            }]
        }, {
            "text": "授权管理",
            "translate": "meepo-oauths-manage",
            "group": true,
            "icon": "anticon anticon-calendar",
            "acl": "imeepos_runner_admin",
            "children": [{
                "text": "我的模块",
                "translate": "meepo-oauths-all",
                "link": "/meepo/oauths/list"
            }]
        }, {
            "text": "模板管理",
            "translate": "meepo-application",
            "group": true,
            "icon": "anticon anticon-appstore",
            "children": [{
                "text": "我的模板",
                "translate": "meepo-application-mine",
                "link": "/meepo/application/mine"
            }, {
                "text": "模板市场",
                "translate": "meepo-application-shop",
                "link": "/meepo/application/shop"
            }, {
                "text": "模板案例",
                "translate": "meepo-application-example",
                "link": "/meepo/application/example"
            }]
        }, {
            "text": "快捷菜单",
            "translate": "shortcut",
            "icon": "icon-rocket",
            "shortcut_root": true,
            "acl": "developer",
            "children": []
        }, {
            "text": "小部件",
            "translate": "widgets",
            "link": "/widgets",
            "icon": "icon-grid",
            "acl": "developer",
            "badge": 2
        }]
    }, {
        "text": "组件",
        "translate": "component",
        "group": true,
        "acl": "developer",
        "children": [{
            "text": "基础元素",
            "translate": "elements",
            "link": "/elements",
            "icon": "icon-chemistry",
            "acl": "role-a",
            "children": [{
                "text": "按钮",
                "link": "/elements/buttons",
                "translate": "buttons",
                "shortcut": true
            }, {
                "text": "Notification",
                "link": "/elements/notification",
                "translate": "notification",
                "shortcut": true
            }, {
                "text": "Modal",
                "link": "/elements/modal",
                "translate": "modal"
            }, {
                "text": "SweetAlert",
                "link": "/elements/sweetalert",
                "translate": "sweetalert"
            }, {
                "text": "Tree Antd",
                "link": "/elements/tree-antd",
                "translate": "tree-antd"
            }, {
                "text": "Sortable",
                "link": "/elements/sortable",
                "translate": "sortable"
            }, {
                "text": "Spin",
                "link": "/elements/spin",
                "translate": "spin"
            }, {
                "text": "Dropdown",
                "link": "/elements/dropdown",
                "translate": "dropdown"
            }, {
                "text": "Grid",
                "link": "/elements/grid",
                "translate": "grid"
            }, {
                "text": "Grid Masonry",
                "link": "/elements/gridmasonry",
                "translate": "gridmasonry"
            }, {
                "text": "Typography",
                "link": "/elements/typography",
                "translate": "typography"
            }, {
                "text": "Font Icons",
                "link": "/elements/iconsfont",
                "translate": "iconsfont"
            }, {
                "text": "Colors",
                "link": "/elements/colors",
                "translate": "colors"
            }]
        }, {
            "text": "表单",
            "translate": "forms",
            "link": "/forms",
            "icon": "icon-note",
            "acl": "developer",
            "children": [{
                "text": "标准",
                "link": "/forms/standard",
                "translate": "standard"
            }, {
                "text": "扩展",
                "link": "/forms/extended",
                "translate": "extended"
            }, {
                "text": "校验",
                "link": "/forms/validation",
                "translate": "validation"
            }, {
                "text": "上传",
                "link": "/forms/upload",
                "translate": "upload",
                "shortcut": true
            }, {
                "text": "图片裁剪",
                "link": "/forms/cropper",
                "translate": "cropper"
            }]
        }, {
            "text": "Charts",
            "translate": "charts",
            "link": "/charts",
            "icon": "icon-graph",
            "acl": "developer",
            "children": [{
                "text": "G2",
                "link": "/charts/g2"
            }]
        }, {
            "text": "表格",
            "translate": "tables",
            "link": "/tables",
            "icon": "icon-grid",
            "acl": "developer",
            "children": [{
                "text": "标准",
                "link": "/tables/standard",
                "translate": "standard"
            }, {
                "text": "Full",
                "link": "/tables/full",
                "translate": "full"
            }]
        }, {
            "text": "地图",
            "translate": "maps",
            "link": "/maps",
            "icon": "icon-map",
            "acl": "developer",
            "children": [{
                "text": "QQ",
                "link": "/maps/qq",
                "translate": "qq"
            }, {
                "text": "Baidu",
                "link": "/maps/baidu",
                "translate": "baidu"
            }]
        }]
    }, {
        "text": "Pro",
        "translate": "pro",
        "group": true,
        "acl": "developer",
        "children": [{
            "text": "Form Page",
            "translate": "form",
            "link": "/pro/form",
            "icon": "icon-note",
            "children": [{
                "text": "Step Form",
                "link": "/pro/form/step-form",
                "translate": "step-form"
            }, {
                "text": "Advanced Form",
                "link": "/pro/form/advanced-form",
                "translate": "advanced-form"
            }]
        }, {
            "text": "List",
            "translate": "pro-list",
            "link": "/pro/list",
            "icon": "icon-grid",
            "children": [{
                "text": "Table List",
                "link": "/pro/list/table-list",
                "translate": "pro-table-list"
            }, {
                "text": "Basic List",
                "link": "/pro/list/basic-list",
                "translate": "pro-basic-list"
            }, {
                "text": "Card List",
                "link": "/pro/list/card-list",
                "translate": "pro-card-list"
            }, {
                "text": "Cover Card List",
                "link": "/pro/list/cover-card-list",
                "translate": "pro-cover-card-list"
            }, {
                "text": "Filter Card List",
                "link": "/pro/list/filter-card-list",
                "translate": "pro-filter-card-list"
            }, {
                "text": "Search",
                "link": "/pro/list/search",
                "translate": "pro-search"
            }]
        }, {
            "text": "Profile",
            "translate": "pro-profile",
            "link": "/pro/profile",
            "icon": "icon-book-open",
            "children": [{
                "text": "Basic",
                "link": "/pro/profile/basic",
                "translate": "pro-profile-basic"
            }, {
                "text": "Advanced",
                "link": "/pro/profile/advanced",
                "translate": "pro-profile-advanced"
            }]
        }, {
            "text": "Result",
            "translate": "pro-result",
            "link": "/pro/result",
            "icon": "icon-check",
            "children": [{
                "text": "Success",
                "link": "/pro/result/success",
                "translate": "pro-result-success"
            }, {
                "text": "Fail",
                "link": "/pro/result/fail",
                "translate": "pro-result-fail"
            }]
        }, {
            "text": "Exception",
            "translate": "pro-exception",
            "link": "/pro/exception",
            "icon": "icon-fire",
            "children": [{
                "text": "403",
                "link": "/pro/exception/403"
            }, {
                "text": "404",
                "link": "/pro/exception/404"
            }, {
                "text": "500",
                "link": "/pro/exception/500"
            }]
        }, {
            "text": "User",
            "translate": "pro-user",
            "link": "/pro/user",
            "icon": "icon-user",
            "children": [{
                "text": "login",
                "link": "/pro/user/login",
                "translate": "pro-login"
            }, {
                "text": "register",
                "link": "/pro/user/register",
                "translate": "pro-register"
            }, {
                "text": "register result",
                "link": "/pro/user/register-result",
                "translate": "pro-register-result"
            }]
        }]
    }, {
        "text": "More",
        "translate": "more",
        "group": true,
        "acl": "developer",
        "children": [{
            "text": "Common Logics",
            "translate": "logics",
            "link": "/logics",
            "icon": "icon-compass",
            "children": [{
                    "text": "ACL",
                    "link": "/logics/acl",
                    "translate": "acl"
                },
                {
                    "text": "Route Guard",
                    "link": "/logics/guard",
                    "translate": "guard",
                    "acl": "admin"
                },
                {
                    "text": "Down File",
                    "link": "/logics/downfile",
                    "translate": "downfile",
                    "shortcut": true
                }
            ]
        }, {
            "text": "Report",
            "translate": "report",
            "icon": "anticon anticon-cloud-o",
            "acl": "imeepos_oauth",
            "children": [{
                "text": "Relation",
                "link": "/data-v/relation",
                "translate": "relation",
                "target": "_blank",
                "shortcut": true
            }]
        }, {
            "text": "Pages",
            "translate": "pages",
            "link": "/pages",
            "icon": "icon-doc",
            "acl": "admin",
            "children": [{
                "text": "Login",
                "link": "/login",
                "translate": "m-login"
            }, {
                "text": "Register",
                "link": "/register",
                "translate": "m-register"
            }, {
                "text": "Forget",
                "link": "/forget",
                "translate": "m-forget"
            }, {
                "text": "Lock",
                "link": "/lock",
                "translate": "m-lock"
            }, {
                "text": "404",
                "link": "/404"
            }, {
                "text": "500",
                "link": "/500"
            }, {
                "text": "Maintenance",
                "link": "/maintenance",
                "translate": "maintenance"
            }]
        }, {
            "text": "Extras",
            "translate": "extras",
            "link": "/extras",
            "icon": "icon-cup",
            "children": [{
                "text": "Blog",
                "link": "/extras/blog",
                "translate": "blog",
                "children": [{
                    "text": "List",
                    "link": "/extras/blog/list",
                    "translate": "list",
                    "badge": 1,
                    "badge_dot": true
                }, {
                    "text": "Comment",
                    "link": "/extras/blog/comment",
                    "translate": "comment"
                }, {
                    "text": "Post",
                    "link": "/extras/blog/post",
                    "translate": "post"
                }, {
                    "text": "WebSite",
                    "externalLink": "//github.com/cipchk/ng-alain",
                    "target": "_blank",
                    "translate": "website"
                }]
            }, {
                "text": "Help Center",
                "link": "/extras/helpcenter",
                "translate": "helpcenter"
            }, {
                "text": "Settings",
                "link": "/extras/settings",
                "translate": "settings"
            }, {
                "text": "Poi",
                "link": "/extras/poi",
                "translate": "poi",
                "acl": "imeepos_oauth"
            }]
        }]
    }]
}