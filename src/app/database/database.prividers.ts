import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'yang1989.',
            database: 'we7',
            entities: [
                __dirname + '/../tables/**/*.entry{.ts,.js}',
            ]
        }),
    },
];



// import { createConnection } from 'typeorm';

// export const databaseProviders = [
//     {
//         provide: 'DbConnectionToken',
//         useFactory: async () => await createConnection({
//             type: 'mysql',
//             host: 'rm-m5eij9972onjno749.mysql.rds.aliyuncs.com',
//             port: 3306,
//             username: 'meepo1234567',
//             password: 'Yang1989',
//             database: 'meepo',
//             entities: [
//                 __dirname + '/../tables/**/*.entry{.ts,.js}',
//             ]
//         }),
//     },
// ];