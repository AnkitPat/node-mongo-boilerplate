import { Get, Post, Route, Put, Body, Delete, Tags } from "tsoa";
import { Validate } from "../common/decorators/Validate";
import HATEOAS from "../common/decorators/HATEOAS";
import EmployeeModels from "../interfaces/EmployeeModelInterface";
import { EmployeeModel } from "../schemas/Employee.schema";

@Route("employees")
@Tags("Employees")
class EmployeesService {

  @Get()
  // Add generic content while get data
  // @HATEOAS("articles")
  public getEmployees(): Promise<EmployeeModels[]> {
    return EmployeeModel.find()
      .then((employees: EmployeeModels[]) => {
        return Promise.resolve(employees);
      })
      .catch((error: Error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }

  @Get("{id}")
  public getEmployeeById(id: string): Promise<EmployeeModels> {
    return EmployeeModel
      .findById(id)
      .then((employee: EmployeeModels) => {
        return Promise.resolve(employee);
      })
      .catch((error: Error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }

  @Post()
  @Validate([
    {
      param: "name",
      validate: "required"
    }
  ])
  public createEmployee(@Body() requestBody: EmployeeModels): Promise<EmployeeModels> {
    const employeeModel = new EmployeeModel(requestBody);

    return employeeModel
      .save()
      .then((createdArticle: EmployeeModels) => {
        return Promise.resolve(createdArticle);
      })
      .catch((error: Error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }

  @Put("{id}")
  public updateEmployee(id: string, @Body() requestBody: EmployeeModels): Promise<EmployeeModels> {

    return EmployeeModel.findByIdAndUpdate(id, requestBody)
      .then((updatedEmployee: EmployeeModels) => {
        return Promise.resolve(updatedEmployee);
      })
      .catch((error: Error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }

  @Delete("{id}")
  public deleteEmployee(id: string): Promise<void> {

    return EmployeeModel.findByIdAndRemove(id)
      .then((res: any) => {
        return Promise.resolve();
      })
      .catch((error: Error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}

export default EmployeesService;
