import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signUpInput, signInInput } from "@vikitekie/blogging-common";

export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success}= signUpInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
           message: "Inputs are incorrect" 
        });
    }
  
    try{
      const user = await prisma.user.create({
              data: {
                email: body.username,
                password: body.password,
                name: body.name
              }
          });
          const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
          return c.json({ jwt });
    }
    catch(e){
        c.status(403);
        return c.json({ error: "error while signing up", msg: e });
    }  
  });
  

  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    
    const {success}= signInInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
           message: "Inputs are incorrect" 
        });
    }

    try{
      const user = await prisma.user.findUnique({
        where: {
          email: body.username,
          password: body.password
        }
      });
    
      if(!user){
        c.status(403);
        return c.json({error: 'User not found'});
      }
    
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    }catch(e){
      c.status(403);
      return c.json({error: 'Error occured while signin'});
    }
    
  });