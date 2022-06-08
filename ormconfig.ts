import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "lesson",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: [
    'dist/src/db/migrations/*.js'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}

export default config;