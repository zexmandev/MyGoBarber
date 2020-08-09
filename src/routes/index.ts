import { Router } from "express";
import appointmentsRouter from "./appointments.routes";

const routes = Router();

//use indica que todas as rotas que vierem depois de  /appointments sejam
// encaminhadas para AppointmentsRouter, independente do tipo de requisição
routes.use("/appointments", appointmentsRouter);

export default routes;
