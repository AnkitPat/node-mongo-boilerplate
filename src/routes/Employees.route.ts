import { Request, Response, Router } from "express";
import { RouteHandler, Get, Post, Put, Delete } from "../common/decorators/RouteHandler";
import Server from "../common/classes/Server";
import EmployeesService from "../classes/EmployeesService";
import EmployeeModels from "../interfaces/EmployeeModelInterface";

@RouteHandler("/employees")
class EmployeesRoute {
  public router: Router;
  private employeesService: EmployeesService;

  constructor(public app: Server) {
    this.employeesService = new EmployeesService();
  }

  @Get()
  public getEmployees(request: Request, response: Response): void {
    this.employeesService.getEmployees()
      .then((employees: EmployeeModels[]) => {
        return response.json(employees);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }

  @Get("/:id")
  public getEmployeeById(request: Request, response: Response): void {
    const id = request.params.id;
    this.employeesService.getEmployeeById(id)
      .then((employee: EmployeeModels) => {
        return response.json(employee);
      })
      .catch((error: Error) => {
        return response.status(400).json({ error: error });
      });
  }

  @Post()
  public createEmployee(request: Request, response: Response): void {
    this.employeesService.createEmployee(request.body)
      .then((createdEmployee: EmployeeModels) => {
        return response.json(createdEmployee);
      })
      .catch((error: Error) => {
        return response.status(400).json({ error: error });
      });
  }

  @Put(":/id")
  public updateEmployee(request: Request, response: Response): void {
    const id = request.params.id;
    const requestBody = request.body;

    this.employeesService.updateEmployee(id, requestBody)
      .then((updatedEmployee: EmployeeModels) => {
        return response.status(204).end();
      })
      .catch((error: Error) => {
        return response.json({ err: error });
      });
  }

  @Delete("/:id")
  public deleteEmployee(request: Request, response: Response): void {

    const employeeId = request.params.id;
   this.employeesService.deleteEmployee(employeeId)
      .then(() => {
        return response.status(204).end();
      })
      .catch((error: Error) => {
        return response.json({ error: error });
      });
  }
}

export default EmployeesRoute;
