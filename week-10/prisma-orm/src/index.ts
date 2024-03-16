import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

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
        password: true,
        firstName: true,
        lastName: true
    }
  });

  console.log(res);

}

async function updateUser(username: string, {firstName, lastName} : UpdateParams){
  const res = await prisma.user.update({
    where:{
      email: username
    },
    data:{
      firstName: firstName,
      lastName: lastName
    },
    select:{
      id: true,
      firstName: true,
      lastName: true
    }
  });

  console.log(res);
}

async function selectUser(username: string) {
  const res = await prisma.user.findFirst({
    where: {
      email: username
    },
    select:{
      firstName:true,
      lastName: true
    }
  })

  console.log(res);
}

//insertUser("srivignesh24@gmail.com", "viki@20203", "Sri Viki", "S");


//updateUser("srivignesh24@gmail.com", {firstName: 'Viki',lastName: 'S'});

selectUser('srivignesh24@gmail.com');