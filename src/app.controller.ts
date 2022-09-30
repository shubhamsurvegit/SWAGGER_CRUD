import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entities';
import { CreateUserDto } from './user.dto';
import { async } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

interface A{
  id:string
  name:string,
  age:number
}

@ApiTags("student")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @ApiResponse({ status: 200, description: 'Successfull Operation.',type:[User]})
  async getAll():Promise<User[]>{
    return await this.appService.getAll()
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.',type:User})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 400, description: 'Invalid Body'})
  @UsePipes(ValidationPipe)
  async createUser(@Body() item:CreateUserDto):Promise<User>{
    return await this.appService.createUser(item)
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Successfull Operation.',type:User})
  @ApiResponse({ status: 404, description: 'Student Not Found'})
  async getUser(@Param('id') id:number):Promise<User>{
    return await this.appService.getUser(id)
  }

  
  @Put(':id')
  @UsePipes(ValidationPipe)
  @ApiResponse({ status: 200, description: 'Student record has been successfully Updated.',type:User})
  @ApiResponse({ status: 404, description: 'Student Not Found'})
  @ApiResponse({ status: 400, description: 'Invalid Body'})
  async updateUser(@Param('id') id:number,@Body() user:CreateUserDto){
    return await this.appService.updateUser(id,user)
  }


  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Student record has been successfully deleted.',type:User})
  @ApiResponse({ status: 404, description: 'Student Not Found'})
  async deleteUser(@Param('id') id:number):Promise<User>{
    return await this.appService.deleteUser(id)
  }

}
