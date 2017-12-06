import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('v1/pois')
export class PoisCtrl extends AddressBase {
	constructor(
		public service: CitiesService
	) {
		super();
	}
	/**
	 * 搜索地址 v1/pois
	 * @param keyword 搜索关键词
	 * @param type 搜索类型，默认为search
	 */
	@Get()
	async search(
		@Query('city_id') city_id,
		@Query('keyword') keyword,
		@Query('type') type,
		@Request() req
	) {
		type = type || 'search';
		let result: any;
		if (!city_id) {
			let city_name = await this.getCityName(req);
			result = await this.searchPlace(keyword, city_name, type);
		} else {
			let city = await this.service.getOneById(city_id);
			result = await this.searchPlace(keyword, city['name'], type);
		}

		const cityList = [];
		if(result['data']){
			result.data.map((item, index) => {
				cityList.push({
					name: item.title,
					address: item.address,
					latitude: item.location.lat,
					longitude: item.location.lng,
					geohash: item.location.lat + ',' + item.location.lng,
				})
			});
		}
		
		return cityList;
	}

	// 根据经纬度详细定位 v1/pois/:geohash
	@Get(':geohash')
	async getPois( @Param('geohash') geohash) {
		const poisArr = geohash.split(',');
		let result = await this.getpois(poisArr[0], poisArr[1]);
		return {
			code: 1,
			msg: 'msg',
			info: result
		};
	}
}