
import { Component, Inject } from '@nestjs/common';
import { CitiesEntry, cities } from './cities.entry';
import { Repository } from 'typeorm';
import { tabless } from '../../config/tables';

@Component()
export class CitiesService {
    constructor(
        @Inject('CitiesRepositoryToken') private readonly repository: Repository<CitiesEntry>
    ) { }
    async getOneById(id) {
        let item;
        let list = await this.getData();
        for (let key in list) {
            let citys = list[key];
            citys.map(res => {
                if (res.id == id) {
                    item = res;
                }
            })
        }
        return item;
    }

    async initData() {
        for(let key in cities){
            cities[key].map(res=>{
                res['hasAgent'] = false;
            });
        }
        return await this.repository.insert({ data: JSON.stringify(cities) });
    }

    async getData() {
        let one = await this.repository.findOne();
        let data = JSON.parse(one.data);
        delete(data['hotCities']);
        return data;
    }

    async getHots(){
        let one = await this.repository.findOne();
        let data = JSON.parse(one.data);
        return data['hotCities'];
    }


    async cityGuess(name){
        // 我的城市
        let result;
        let citys = await this.getData();
        for(let key in citys){
            citys[key].map(city=>{
                if(city.pinyin == name){
                    result = city;
                }
            })
        }
        return result;
    }
}
