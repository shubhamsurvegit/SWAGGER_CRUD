import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

import {User} from './user.entities'

@Injectable()
export class AppService {

  constructor(@InjectRepository(User) private userRepository: Repository<User> ){

  }
  getHello(): string {
    return 'Hello World!';
  }

  getAll():Promise<User[]>{
    return this.userRepository.find()
  }

  async getUser(id:number):Promise<User>{
    const user=await this.userRepository.findOneBy({id})
    if(!user){
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.findOneBy({id})
  }

  async createUser(user:CreateUserDto):Promise<User>{
    const newUser=this.userRepository.create(user)
    return await this.userRepository.save(newUser)
  }

  async updateUser(id:number,user:CreateUserDto){
    const getuser=await this.userRepository.findOneBy({id})
    if(!getuser){
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.userRepository.update(id,user)
    return user

  }

  async deleteUser(id:number):Promise<User>{
    const user=await this.userRepository.findOneBy({id})
    if(!user){
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return this.userRepository.remove(user)
   }


}
