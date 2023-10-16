import { Schema, model } from "mongoose";
import { IEmpleado } from "../interfaces/employeInterfaces";

const empleadoSchema = new Schema<IEmpleado>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

const Empleado = model<IEmpleado>("Empleado", empleadoSchema);

export default Empleado;
