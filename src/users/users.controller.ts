import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){

    }

    @Get()
    getUsers(): User[]{
        return this.usersService.findAll()
    }

    @Get(':id')
    getUserById(@Param('id') id:string):User{ // TODO: auto parse
        return this.usersService.findById(Number(id))
    }

    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body)
    }
}
