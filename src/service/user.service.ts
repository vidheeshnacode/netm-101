import {  } from 'mongoose';
import UserModel, { UserDocument, UserInput } from '../models/user.model';

export async function createUser(input: UserInput) {
    try{
        return await UserModel.create(input);
    } catch(e: any){
        throw new Error(e)
    }
    
}