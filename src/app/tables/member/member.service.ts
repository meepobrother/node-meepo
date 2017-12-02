
import { Component, Inject } from '@nestjs/common';
import { MemberEntry } from './member.entry';
import { Repository } from 'typeorm';

@Component()
export class MemberService {
    constructor(
        @Inject('MemberRepositoryToken') private readonly repository: Repository<MemberEntry>
    ) { }
}
