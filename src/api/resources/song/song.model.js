import mongoose from "mongoose";

export const schema = {};

const songSchema = new mongoose.Schema(schema, {timestamps: true});

export const Song = mongoose.model("song", songSchema);
