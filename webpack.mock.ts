// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import data from "./data.json";

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

  app.get("/api/getTopProducts", (_req, res) => {
    // res.sendFile(require.resolve("./data.json"));
    data.sort(
      (
        a: {
          id: number;
          title: string;
          price: number;
          description: string;
          category: string;
          image: string;
          date: string;
          rating: { rate: number; count: number };
        },
        b: {
          id: number;
          title: string;
          price: number;
          description: string;
          category: string;
          image: string;
          date: string;
          rating: { rate: number; count: number };
        }
      ) => {
        const c: unknown | Date = new Date(b.date);
        const d: unknown | Date = new Date(a.date);
        return c - d;
      }
    );
    res.sendFile(require.resolve("./data.json"));
    res.json(data);
  });
});
