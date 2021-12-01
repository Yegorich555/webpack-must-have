// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import data from "./data.json";
import { Product } from "./src/types/types";

export default webpackMockServer.add((app, helper) => {
  app.get("/testMock", (_req, res) => {
    const response = {
      id: helper.getUniqueIdInt(),
      randomInt: helper.getRandomInt(),
      lastDate: new Date(),
    };

    res.json(response);
  });
  app.post("/testPostMock", (req, res) => {
    res.json({ body: req.body || null, success: true });
  });
  app.post("/api/auth/signIn/", (req, res) => {
    res.json({ name: req.body.name, password: req.body.password });
  });
  app.get("/api/getTopProducts", (_req, res) => {
    data.sort((a: Product, b: Product) => {
      const c: Date | unknown = new Date(b.date);
      const d: Date | unknown = new Date(a.date);
      return c - d;
    });
    res.sendFile(require.resolve("./data.json"));
    res.json(data);
  });
});
