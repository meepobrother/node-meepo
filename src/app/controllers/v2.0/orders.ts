import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('v2/orders')
export class V2OrderCtrl extends AddressBase {
	constructor(
		public service: CitiesService
	) {
		super();
	}

	@Get(':id')
	async index( ) {
		return [];
	}
}