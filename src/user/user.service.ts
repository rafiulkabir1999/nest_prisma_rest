import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
 constructor(private prisma: PrismaService){}
 async index(){
     return this.prisma.user.findMany();
   //  return "hello from user service "
 }
 async getUserByid(id:number){
     return this.prisma.user.findUnique({
      where: {id:id },
     });
   
 }
 async editUser(id:number){
    var data = {
      name: 'new name',
      email: 'newemail@demo.com',
    }
     var user = this.prisma.user.update({
      where: {id:id },
      data:data
     });
   //   return (await user).name;
   return user;
   
 }
 async create(){
     return this.prisma.user.create({
      data:{
         name:'nahid ul kabir',
         email:'email'+ Date.now()+'@demo.com',
      },
     });
   //  return "hello from user service "
 }

 async deleteUser(id:number){
   return this.prisma.user.delete({
      where:{
         id:id
      },
   })
 }
}
