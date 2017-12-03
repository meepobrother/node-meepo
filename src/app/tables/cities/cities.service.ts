
import { Component, Inject } from '@nestjs/common';
import { CitiesEntry, cities, hotCities } from './cities.entry';
import { Repository } from 'typeorm';
import { tabless } from '../../config/tables';

@Component()
export class CitiesService {
    constructor(
        @Inject('CitiesRepositoryToken') private readonly repository: Repository<CitiesEntry>
    ) { }

    async getHots() {
        return await this.repository.find({
            where: { is_hot: 1 }
        });
    }

    async getGroup() {
        let list = await this.getAll();
        let results = {};
        list.map(res=>{
            results[res.uc_first] = results[res.uc_first] || [];
            results[res.uc_first].push(res);
        });
        return results;
    }

    async getAll() {
        return await this.repository.find({
            cache: true,
            order: {
                "sort": "ASC",
                "id": "DESC"
            }
        });
    }

    add() {
        this.repository.create();
    }

    async installData() {
        
        for (let key in cities) {
            let cityss = cities[key];
            let list = [];
            cityss.map(city => {
                city['is_hot'] = false;
                city['uc_first'] = city.abbr.substr(0, 1);
                list.push(city);
            });
            await this.repository.save(list);
        }

        hotCities.map(city => {
            city['is_hot'] = true;
            city['uc_first'] = city.abbr.substr(0, 1);
        });
        await this.repository.save(hotCities);
    }
}
