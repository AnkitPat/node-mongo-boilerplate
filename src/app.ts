import Server from "./common/classes/Server";
import IndexRoute from "./routes/Index.route";
import UsersRoute from "./routes/Users.route";
import EmployeesRoute from "./routes/Employees.route";
const app = new Server(process.env.PORT || 8080);

const employees = new EmployeesRoute(app);

const index = new IndexRoute(app.getRoutes());
app.addRoute("/", index.router);

const users = new UsersRoute(app);

app.start();
