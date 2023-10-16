import { Schema, model } from "mongoose";
import { IUsuario } from "../interfaces/userInterfaces";

const usuarioSchema = new Schema<IUsuario>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usuario = model<IUsuario>("Usuario", usuarioSchema);

export default Usuario;
