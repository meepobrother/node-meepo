
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';
import { Collection } from 'mongoose';

@Entity(tabless['shopGoods'])
export class ShopgoodsEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uniacid: number;

    @Column()
    pcate: number;

    @Column()
    ccate: number;

    @Column()
    type: number;

    @Column()
    status: number;

    @Column()
    displayorder: number;

    @Column()
    title: string;

    @Column()
    thumb: string;


    @Column()
    unit: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    goodssn: string;

    @Column()
    productsn: string;

    @Column()
    productprice: number;

    @Column()
    costprice: number;

    @Column()
    originalprice: number;

    @Column()
    total: number;

    @Column()
    totalcnf: number;

    @Column()
    sales: number;

    @Column()
    salesreal: number;

    @Column()
    spec: string;

    @Column()
    createtime: number;

    @Column()
    weight: number;

    @Column()
    credit: string

    @Column()
    maxbuy: number;

    @Column()
    usermaxbuy: number;

    @Column()
    hasoption: number;

    @Column()
    dispatch: number;

    @Column()
    thumb_url: string;
    @Column()
    isnew: boolean;

    @Column()
    ishot: boolean;

    @Column()
    isdiscount: boolean;

    @Column()
    isrecommand: boolean;

    @Column()
    issendfree: boolean;

    @Column()
    istime: boolean;

    @Column()
    iscomment: boolean;

    @Column()
    timestart: number;

    @Column()
    timeend: number;

    @Column()
    viewcount: number;

    @Column()
    deleted: number;

    @Column()
    hascommission: number;

    @Column()
    commission1_rate: number;

    @Column()
    commission1_pay: number;

    @Column()
    commission2_rate: number;

    @Column()
    commission2_pay: number;

    @Column()
    commission3_rate: number;

    @Column()
    commission3_pay: number;

    @Column()
    score: number;

    @Column()
    taobaoid: string;

    @Column()
    taotaoid: string;

    @Column()
    updatetime: number;

    @Column()
    share_title: string;

    @Column()
    share_icon: string;

    @Column()
    cash: number;

    @Column()
    commission_thumb: string;

    @Column()
    isnodiscount: number;

    @Column()
    showlevels: string;

    @Column()
    buylevels: string;

    @Column()
    showgroups: string;

    @Column()
    buygroups: string;

    @Column()
    isverify: number;

    @Column()
    storeids: string;

    @Column()
    noticeopenid: string;

    @Column()
    tcate: number;

    @Column()
    noticetype: string;

    @Column()
    needfollow: number;

    @Column()
    followtip: string;

    @Column()
    followurl: string;

    @Column()
    deduct: number;

    @Column()
    virtual: number;

    @Column()
    ccates: string;

    @Column()
    discounts: string;

    @Column()
    nocommission: number;

    @Column()
    hidecommission: number;

    @Column()
    pcates: string;

    @Column()
    tcates: string;

    @Column()
    cates: string;

    @Column()
    artid: number;

    @Column()
    detail_logo: string;
    @Column()
    detail_shopname: string;

    @Column()
    detail_btntext1: string;

    @Column()
    detail_btnurl1: string;


    @Column()
    detail_btntext2: string;

    @Column()
    detail_btnurl2: string;

    @Column()
    detail_totaltitle: string;
}
