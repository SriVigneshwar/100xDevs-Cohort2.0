import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email: username,
        password,
        firstName,
        lastName
    },
    select:{
        id: true,
        password: true
    }
  })

  console.log(res);

}

insertUser("srivignesh2416@gmail.com", "viki@20203", "Sri Viki", "S");