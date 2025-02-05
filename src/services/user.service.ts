import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserService {
    private userRepository: Repository<User>;

    constructor(dataSource: DataSource) {
        this.userRepository = dataSource.getRepository(User);
    }

    get(): Promise<User[]> {
        return this.userRepository.find();
    }
}