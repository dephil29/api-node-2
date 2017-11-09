import express from "express";
import {connect} from "./db";

const app = express();

connect();

app.get("/", (req, res) => {
  res.json({ok: false});
});

// Never in production
app.all("*", (req, res) => {
  res.json({ok: true});
});

export default app;
