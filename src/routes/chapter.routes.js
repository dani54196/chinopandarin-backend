import { Router } from "express";
const router = Router();

import * as chapterCtrl from "../controllers/chapter.controller";
import { authJwt } from "../middlewares";

router.get("/", chapterCtrl.getChapters);

router.get("/:productId", chapterCtrl.getChapterById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  chapterCtrl.createChapter
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator],
  chapterCtrl.updateChapterById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  chapterCtrl.deleteChapterById
);

export default router;
