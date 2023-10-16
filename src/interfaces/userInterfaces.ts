import { Request } from "express";

export interface IGetUserRequest extends Request {
  uid: string;
  name: string;
}

export interface IUsuario {
  name: string;
  email: string;
  password: string;
}
