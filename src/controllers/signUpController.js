import user from '../db/models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class signUpController {
    static async signUp (request, response){
        const {firstname,lastname,email,password} = request.body;
        let userIsExist = await user.findAll({ where:{email} });
        bcrypt.hash(password,9,async(err,hashedPassword)=>{
        if(userIsExist.length>0) return response.status(409).json({message:'User already exist'})
       const newUser = await user.create({firstname,lastname,email,password:hashedPassword});
        const token = jwt.sign({userId:newUser.id,email:newUser.email},'secretkey')
        response.status(201).json({token,message:'user successfully created'})
        })
    }
}