import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL:string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRoute.use(async (c, next)=>{
    const header = c.req.header("Authorization");
    if (!header) {
        c.status(401);
        return c.json({error: "Unauthorized"})
    }
    const token = header.split(" ")[1]

    const response = await verify(token, c.env.JWT_SECRET)
    if(!response) {
        c.status(401);
        return c.json({error: "Unauthorized"})
    }
    c.set('userId', response.id);
    await next()
})


// Initialize blog Post
blogRoute.post('/', async(c)=>{
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    });
    return c.json({
        id: post.id
    });
})

// Update a post
blogRoute.put('/', async(c)=>{
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data:{
            title: body.title,
            content: body.content
        }
    });
    return c.text('Post Updated')
})

//Get all post
blogRoute.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findUnique({
        where: {
            id
        }
    });
    return c.json(post);
})
