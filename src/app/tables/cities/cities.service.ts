
import { Component, Inject } from '@nestjs/common';
import { CitiesEntry, cities, hotCities } from './cities.entry';
import { Repository } from 'typeorm';
import { tabless } from '../../config/tables';

@Component()
export class CitiesService {
    constructor() { }

    getHots() {
        return hotCities;
    }

    getGroup() {
        return cities;
    }

    getOneById(id) {
        let item;
        for(let key in cities){
            let citys = cities[key];
            citys.map(res=>{
                if(res.id == id){
                    item = res;
                }
            })
        }
        return item;
    }

    // async getAll() {
    //     return await this.repository.find({
    //         cache: false,
    //         order: {
    //             "sort": "ASC"
    //         }
    //     });
    // }

    // add() {
    //     this.repository.create();
    // }

    // async installData() {

    //     for (let key in cities) {
    //         let cityss = cities[key];
    //         let list = [];
    //         cityss.map(city => {
    //             city['is_hot'] = false;
    //             city['uc_first'] = city.abbr.substr(0, 1);
    //             list.push(city);
    //         });
    //         await this.repository.save(list);
    //     }

    //     hotCities.map(city => {
    //         city['is_hot'] = true;
    //         city['uc_first'] = city.abbr.substr(0, 1);
    //     });
    //     await this.repository.save(hotCities);
    // }
}
