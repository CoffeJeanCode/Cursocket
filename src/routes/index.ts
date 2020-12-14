import { Router, Response } from "express";

const router = Router();

router.get("/", (_, res: Response) => {
  res.render("index");
});

export default router;
