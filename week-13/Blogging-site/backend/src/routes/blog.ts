import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import {createBlogInput, updateBlogInput} from '@vikitekie/blogging-common';

export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    },
    Variables:{
        userId: string
    }
  }>();

  blogRouter.use('/*', async (c, next) => {
    try{
        const header  = c.req.header('authorization') || "";
  
        const token = header.split(" ")[1];
    
        const user = await verify(token, c.env.JWT_SECRET);
    
        if(user){
            c.set("userId", user.id);
            await next();
        }
        else{
            c.status(403);
            return c.json({error: 'unauthorized user'});
        }
    }
    catch(e){
        c.status(403);
        return c.json({error: 'Error in Authorising the user'});
    }
  });

    blogRouter.post('/', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const authorId = c.get("userId");

        const body = await c.req.json();

        const {success} = createBlogInput.safeParse(body);

        if(!success){
            c.status(411);
            return c.json({
                message: "Inputs are incorrect" 
             });
        }

        try{
            const blog = await prisma.post.create({
                data: {
                    title: body.title,
                    content: body.content,
                    authorId: authorId
                }
            })
    
            return c.json({
                id: blog.id
            });
        }
        catch(e){
            c.status(403);
            return c.json({
                error: 'Error while posting the blog',
                msg: e
            })
        }
    });
    
    blogRouter.put('/', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const body = await c.req.json();

        const {success} = updateBlogInput.safeParse(body);

        if(!success){
            c.status(411);
            return c.json({
                message: "Inputs are incorrect" 
             });
        }

        try{
            const blog = await prisma.post.update({
                where: {
                    id: body.id
                },
                data:{
                    title: body.title,
                    content: body.content
                }
            });

            return c.json({
                id: blog.id
            });
        }catch(e){
            c.status(403);
            return c.json({
                error: 'Error while updating the blog',
                msg: e
            })
        }
    });


    // Todo: Add pagination logic
    blogRouter.get('/bulk', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        try{
            const blogs = await prisma.post.findMany();

            return c.json({
               blogs 
            });
        }catch(e){
            c.status(403);
            return c.json({
                error: 'Error while fetching the blogs',
                msg: e
            });
        }
    });


    blogRouter.get('/:id', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const blogId = c.req.param("id");

        try{
            const blog = await prisma.post.findFirst({
                where: {
                    id: blogId
                }
            });
            return c.json({
                blog
            });
        }catch(e){
            c.status(403);
            return c.json({
                error: 'Error while fetching the post',
                msg: e
            });
        }
        
    });