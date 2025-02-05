import { Controller, Get } from "@nestjs/common";
import { User } from "src/entities/user";
import { UserService } from "src/services/user.service";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {};

    @Get()
    get(): Promise<User[]> {
        return this.userService.get();
    }

}