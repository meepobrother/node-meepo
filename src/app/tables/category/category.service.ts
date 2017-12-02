
import { Component, Inject } from '@nestjs/common';
import { CategoryEntry } from './category.entry';
import { Repository } from 'typeorm';

@Component()
export class CategoryService {
    constructor(
        @Inject('CategoryRepositoryToken') private readonly repository: Repository<CategoryEntry>
    ) { }
}
