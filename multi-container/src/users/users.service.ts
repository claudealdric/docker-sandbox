import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  createUser() {
    const user = new User();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    return this.usersRepository.save(user);
  }

  getUsers() {
    return this.usersRepository.find();
  }
}
