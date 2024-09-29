import { Controller, Get,Param,Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
     constructor(private userService:UserService){}
    @Get('/')
    index() {
        return this.userService.index();
    }
    @Get(':id')
    get_user_by_id(@Param('id')id:string) {
        const userId = parseInt(id, 10)
        return this.userService.getUserByid(userId);
    }
    @Get(':id/edit')
    eidt(@Param('id')id:string) {
        const userId = parseInt(id, 10)
        return this.userService.editUser(userId);
    }
    @Get('/create')
    create() {
        return this.userService.create();
    }
}
