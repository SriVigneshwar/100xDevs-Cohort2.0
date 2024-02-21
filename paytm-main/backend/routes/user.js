const express = require('express');

const router = express.Router();


const zod = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {authMiddleware} = require('../middleware');

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

router.post('/signup', async (req, res)=>{
    const {success} = signupBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs" 
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs" 
        });
    }

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    const userId = user._id;

    //create new Acc
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000
    });

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token  
    });
});


router.post('/signin', async (req, res) =>{
    const {success} = signinBody.safeParse({
        username: req.body.username,
        password: req.body.password
    });

    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    const user = await User.findOne({
       username: req.body.username,
       password: req.body.password 
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        return res.status(200).json({
            token: token
        });
    }

    res.status(411).json({
        message: "Error while logging in"
    });
});


router.put('/', authMiddleware, async (req,res) =>{
    const {success} = updateBody.safeParse({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    await User.updateOne({
        _id: req.userId
    }, req.body);

    res.json({
        message: "Updated successfully"
    });
});

router.get('/bulk', authMiddleware, async (req, res)=>{
    const filter = req.query.filter || "";
    const regex = new RegExp(filter, 'i');
    
    const users = await User.find({
        $or: [{
            firstName: regex
        },
        {
            lastName: regex
        }]
    })
    
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
});

module.exports = router;