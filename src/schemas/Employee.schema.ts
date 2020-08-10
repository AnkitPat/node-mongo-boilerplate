import { Schema, Model, model } from "mongoose";
import EmployeeModelInterface from "../interfaces/EmployeeModelInterface";

const EmployeeSchema: Schema = new Schema({
  id: String,
  name: String,
  jobTitle: String,
  dateOfBirth: String
});

const EmployeeModel: Model<EmployeeModelInterface> = model<EmployeeModelInterface>("Employee", EmployeeSchema);
export {EmployeeModel};
