#! /usr/bin/env node

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = process.cwd();
var argv = require("yargs").argv;


let _m = argv.m;
let dir = `${path}/src/app/tables/${_m}`;

mkdirp(dir, function(err) {
    if (err) {
        console.log(err);
    }
});

let entryFile = `${dir}/${_m}.entry.ts`;
let moduleFile = `${dir}/${_m}.module.ts`;
let prividersFile = `${dir}/${_m}.providers.ts`;
let serviceFile = `${dir}/${_m}.service.ts`;
let indexFile = `${dir}/index.ts`;

let entryTpl = `
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['${_m}'])
export class ${ucfirst(_m)}Entry {
    @PrimaryGeneratedColumn()
    id: number;
}
`;

let moduleTpl = `
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { ${_m}Providers } from './${_m}.providers';
import { ${ucfirst(_m)}Service } from './${_m}.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...${_m}Providers,
        ${ucfirst(_m)}Service
    ],
    exports: [
        ${ucfirst(_m)}Service
    ]
})
export class ${ucfirst(_m)}Module {}
`;

let prividersTpl = `
import { ${ucfirst(_m)}Entry } from './${_m}.entry';
import { Connection, Repository } from 'typeorm';
export const ${_m}Providers = [
    {
        provide: '${ucfirst(_m)}RepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(${ucfirst(_m)}Entry),
        inject: ['DbConnectionToken'],
    },
];
`;

let serviceTpl = `
import { Component, Inject } from '@nestjs/common';
import { ${ucfirst(_m)}Entry } from './${_m}.entry';
import { Repository } from 'typeorm';

@Component()
export class ${ucfirst(_m)}Service {
    constructor(
        @Inject('${ucfirst(_m)}RepositoryToken') private readonly repository: Repository<${ucfirst(_m)}Entry>
    ) { }
}
`;

let indexTpl = `
export * from './${_m}.entry';
export * from './${_m}.module';
export * from './${_m}.providers';
export * from './${_m}.service';
`;
fs.writeFile(`${entryFile}`, entryTpl, {}, () => {});
fs.writeFile(`${moduleFile}`, moduleTpl, {}, () => {});
fs.writeFile(`${prividersFile}`, prividersTpl, {}, () => {});
fs.writeFile(`${serviceFile}`, serviceTpl, {}, () => {});
fs.writeFile(`${indexFile}`, indexTpl, {}, () => {});

function ucfirst(str) {
    var str = str.toLowerCase();
    var strarr = str.split(' ');
    var result = '';
    for (var i in strarr) {
        result += strarr[i].substring(0, 1).toUpperCase() + strarr[i].substring(1);
    }
    return result;
}