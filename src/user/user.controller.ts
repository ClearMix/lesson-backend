import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(readonly userService: UserService) {}

    @Get(':id')
    async getUser(
        @Param('id') userId: string
    ) {
        try{
            const user = await this.userService.getUser(userId)
            console.log(user)
            return { user }
        } catch (error) {
            console.log(error)
        }
    }

    @Post()
    async postUser(
        @Body('email') email: string,
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        try {
            const result = await this.userService.createUser({ email, username, password })
            console.log(result)
            return {
                result
            }
        } catch(error) {
            console.log(error)
        }
    }
}
