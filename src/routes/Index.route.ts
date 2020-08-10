import { Request, Response, Router } from "express";

class IndexRoute {
  public router: Router;

  constructor(public applicationRoutes: string[]) {
    this.router = Router();
    this.init();
  }

  public init() {

  }
}

export default IndexRoute;
