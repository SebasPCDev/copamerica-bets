import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/models/roles.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: UsersDto) {
    const user = await this.getUserByEmail(data.email);
    if (user) throw new BadRequestException('Usuario existente');

    const userTemp = { ...data, role: Role.USER };
    const newUserTemp = this.usersRepository.create(userTemp);
    const newUser = await this.usersRepository.save(newUserTemp);

    return newUser;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ email });
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  /*   update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  } */

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
