import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/models/roles.enum';
import * as bcrypt from 'bcrypt';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: UsersDto) {
    const user = await this.getUserByEmail(data.email);
    if (user) throw new BadRequestException('Usuario existente');

    const hasedPassword = await bcrypt.hash(data.password, 10);
    data.password = hasedPassword;

    const userTemp = { ...data, role: Role.USER };
    const newUserTemp = this.usersRepository.create(userTemp);
    const newUser = await this.usersRepository.save(newUserTemp);

    return newUser;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ email });
    return user;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(user_id: UUID) {
    const user = await this.usersRepository.findOne({
      where: { id: user_id },
      relations: ['predictions'],
    });

    return user;
  }

  /*     update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } */
}
