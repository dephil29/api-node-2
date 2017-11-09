import express from "express";
import songController from "./song.controller";

export const songRouter = express.Router();

songRouter.param("id", songController.findByParam);

// /user
songRouter
.route("/")
.get(songController.getAll)
.post(songController.createOne);

// /user/:id
songRouter
.route("/:id")
.get(songController.getOne)
.put(songController.updateOne)
.delete(songController.deleteOne);
