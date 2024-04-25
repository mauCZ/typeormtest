import { DataSource } from 'typeorm';
import {User} from './entities/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'argoniur00',
    port: 3306,
    database: 'typeorm',
    entities: [User],
    logging: true,
    synchronize: true
});
