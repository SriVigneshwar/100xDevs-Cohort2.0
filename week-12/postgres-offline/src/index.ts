import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function InserUser(username: string, password: string, firstName: string, lastName: string) {
    await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    });
}

async function updateUser(username: string, firstName: string, lastName: string) {
    await prisma.user.update({
        where:{
            username
        },
        data:{
            firstName,
            lastName
        }
    });
}

//InserUser('test','test', 'test', 'test');

updateUser('test', 'Viki', 'S');
