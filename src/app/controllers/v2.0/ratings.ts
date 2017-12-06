import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('v2/ratings')
export class V2RatingsCtrl extends AddressBase {
	constructor(
		public service: CitiesService
	) {
		super();
	}

	// 根据经纬度详细定位 v2/pois/:geohash
	@Get(':id')
	async getPois( ) {
        return data;
    }
    
    @Get('scores/:id')
    async getScores(){
        return scores;
    }

    @Get('tags/:id')
    async getTags(){
        return tags;
    }
}
let tags = [{"name":"全部","_id":"5a22f885ec81ce77ee8449a3","unsatisfied":false,"count":473},{"name":"满意","_id":"5a22f885ec81ce77ee8449a2","unsatisfied":false,"count":453},{"name":"不满意","_id":"5a22f885ec81ce77ee8449a1","unsatisfied":true,"count":20},{"name":"有图","_id":"5a22f885ec81ce77ee8449a0","unsatisfied":false,"count":2},{"name":"味道好","_id":"5a22f885ec81ce77ee84499f","unsatisfied":false,"count":47},{"name":"送货快","_id":"5a22f885ec81ce77ee84499e","unsatisfied":false,"count":32},{"name":"分量足","_id":"5a22f885ec81ce77ee84499d","unsatisfied":false,"count":18},{"name":"包装精美","_id":"5a22f885ec81ce77ee84499c","unsatisfied":false,"count":15},{"name":"干净卫生","_id":"5a22f885ec81ce77ee84499b","unsatisfied":false,"count":15},{"name":"食材新鲜","_id":"5a22f885ec81ce77ee84499a","unsatisfied":false,"count":15},{"name":"服务不错","_id":"5a22f885ec81ce77ee844999","unsatisfied":false,"count":11}];
let scores = {"compare_rating":0.76869,"deliver_time":40,"food_score":4.76378,"order_rating_amount":473,"overall_score":4.72836,"service_score":4.69295};
let data = [{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"按时送达","_id":"5a22f885ec81ce77ee8449b7","username":"4*******b","tags":[],"item_ratings":[{"food_id":508807792,"food_name":"超级至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449b9","is_valid":1,"image_hash":"dc864033625905f0a15a2d181d53a425jpeg"},{"food_id":508808743,"food_name":"韩式浓情风味鸡（标准份）","_id":"5a22f885ec81ce77ee8449b8","is_valid":1,"image_hash":"074e0e203f613deff4e456c31e4177d1jpeg"}],"highlights":[],"avatar":""},{"rated_at":"2017-02-09","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b4","username":"t****n","tags":[],"item_ratings":[{"food_id":508809467,"food_name":"香草凤尾虾-5只装","_id":"5a22f885ec81ce77ee8449b6","is_valid":1,"image_hash":""},{"food_id":508808754,"food_name":"鸡茸蘑菇汤","_id":"5a22f885ec81ce77ee8449b5","is_valid":1,"image_hash":"5388b26ad173389d89e0e015dbf295fcjpeg"}],"highlights":[],"avatar":"15f6cf782b0c9cd5ca8daa7f76ab05aejpeg"},{"rated_at":"2017-01-18","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b2","username":"，******C","tags":[],"item_ratings":[{"food_id":508809480,"food_name":"冰柠檬红茶（标准份）","_id":"5a22f885ec81ce77ee8449b3","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449b1","username":"试******春","tags":[],"item_ratings":[],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449ae","username":"王******a","tags":[],"item_ratings":[{"food_id":529149980,"food_name":"富贵“鸡”祥大吉大利比萨","_id":"5a22f885ec81ce77ee8449b0","is_valid":1,"image_hash":""},{"food_id":144654782,"food_name":"热柠檬红茶","_id":"5a22f885ec81ce77ee8449af","is_valid":1,"image_hash":""}],"highlights":[],"avatar":"1b523ca27369a0eed1ce0c3fc0a5ba8bjpeg"},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449aa","username":"3*******7","tags":[],"item_ratings":[{"food_id":508808726,"food_name":"加州风情香烤牛肉比萨-铁盘","_id":"5a22f885ec81ce77ee8449ad","is_valid":1,"image_hash":""},{"food_id":508810265,"food_name":"海鲜至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449ac","is_valid":1,"image_hash":""},{"food_id":508807792,"food_name":"超级至尊比萨-铁盘","_id":"5a22f885ec81ce77ee8449ab","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a7","username":"3*******6","tags":[],"item_ratings":[{"food_id":529149980,"food_name":"富贵“鸡”祥大吉大利比萨","_id":"5a22f885ec81ce77ee8449a9","is_valid":1,"image_hash":""},{"food_id":508808743,"food_name":"韩式浓情风味鸡（标准份）","_id":"5a22f885ec81ce77ee8449a8","is_valid":1,"image_hash":""}],"highlights":[],"avatar":""},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"送餐速度很快！","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a6","username":"3*******7","tags":[],"item_ratings":[],"highlights":[],"avatar":"818cf0c977c77ca365557230db619a18jpeg"},{"rated_at":"2017-02-10","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a5","username":"3*******b","tags":[],"item_ratings":[],"highlights":[],"avatar":""},{"rated_at":"2017-02-09","rating_star":5,"rating_text":"","time_spent_desc":"","_id":"5a22f885ec81ce77ee8449a4","username":"景***0","tags":[],"item_ratings":[],"highlights":[],"avatar":""}];
