import Router, { Request, Response } from "express";

const appRouter = Router();

const handlerMainRouter = async (_: Request, response: Response) => {
  return response.status(200).json({ status: "OK" });
};
appRouter.get("/", handlerMainRouter);

export { appRouter };
