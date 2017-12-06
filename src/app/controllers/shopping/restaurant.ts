import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('shopping/restaurant')
export class RestaurantCtrl extends AddressBase {
    constructor() {
        super();
    }

    @Get(':id')
    index() {
        return items;
    }
}


let items = {"name":"演示","address":"地铁11号线支线,地铁11号线","id":1,"latitude":31.14123,"longitude":121.66807,"location":[121.66807,31.14123],"phone":"12387387234","category":"快餐便当/简餐","supports":[{"description":"已加入“外卖保”计划，食品安全有保障","icon_color":"999999","icon_name":"保","id":7,"name":"外卖保","_id":"5a22f885ec81ce77ee844995"},{"description":"准时必达，超时秒赔","icon_color":"57A9FF","icon_name":"准","id":9,"name":"准时达","_id":"5a22f885ec81ce77ee844994"},{"description":"该商家支持开发票，请在下单时填写好发票抬头","icon_color":"999999","icon_name":"票","id":4,"name":"开发票","_id":"5a22f885ec81ce77ee844993"}],"status":0,"recent_order_num":934,"rating_count":190,"rating":4.4,"promotion_info":"好吃多好吃的","piecewise_agent_fee":{"tips":"配送费约¥5"},"opening_hours":["05:30/23:00"],"license":{"catering_service_license_image":"160189a9e0b29.png","business_license_image":"1601898d52d27.png"},"is_new":true,"is_premium":true,"image_path":"16018a6492334.jpeg","identification":{"registered_number":"","registered_address":"","operation_period":"","licenses_scope":"","licenses_number":"","licenses_date":"","legal_person":"","identificate_date":null,"identificate_agency":"","company_name":""},"float_minimum_order_amount":20,"float_delivery_fee":5,"distance":"","order_lead_time":"","description":"好吃多好吃的","delivery_mode":{"color":"57A9FF","id":1,"is_solid":true,"text":"蜂鸟专送"},"activities":[{"icon_name":"减","name":"满减优惠","description":"满30减5，满60减8","icon_color":"f07373","id":1,"_id":"5a22f885ec81ce77ee844997"},{"icon_name":"特","name":"优惠大酬宾","description":"支付是对方是否的","icon_color":"EDC123","id":2,"_id":"5a22f885ec81ce77ee844996"}],"__v":0};