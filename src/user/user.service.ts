import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

interface User {
    username: string,
    password: string,
    email: string
}

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    createUser({ password, username, email }: User) {
        const newUser = this.userRepository.create({
            password,
            username,
            email
        });
        return this.userRepository.save(newUser);
    }

    getUser(userId: string) {
        const user = this.userRepository.findOneOrFail(userId)
        return user;
    }
}