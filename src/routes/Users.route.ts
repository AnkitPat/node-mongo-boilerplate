import { Request, Response, Router } from "express";
import UsersService from "../classes/UsersService";
import User from "../classes/User";
import { RouteHandler, Get, Post } from "../common/decorators/RouteHandler";
import Server from "../common/classes/Server";

@RouteHandler("/users")
export class UsersRoute {
  public usersService: UsersService;
  public router: Router;

  constructor(public app: Server) {
    this.usersService = new UsersService();
  }

  @Get()
  public getUsers(req: Request, res: Response) {
    return this.usersService.getUsers()
      .then((response: User[]) => {
        res.send(response);
      });
  }

  @Get("/:id")
  public getUserById(req: Request, res: Response) {
    return res.send("Hello " + req.params.id);
  }

  @Post()
  public postUser(req: Request, res: Response) {
    return res.json(req.body);
  }
}

export default UsersRoute;
