import { Document } from "mongoose";

interface EmployeeModels extends Document {
    id: string;
    name: string;
    jobTitle: string;
    dateOfBirth: string;
}

export default EmployeeModels;
