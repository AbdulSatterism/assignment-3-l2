/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  name: string;
  password: string;
  email: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
  isDeleted?:boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}
