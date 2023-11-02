/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";

const mockUser = {
  id: 919191,
  firstName: "Will",
  lastName: "Smith",
  email: "willsmith321@gmail.com",
  phone: "14842918996",
  role: "admin",
  avatarImageUrl: undefined,
  locked: false,
};

export default webpackMockServer.add((app) => {
  app.post("api/login", (req, res) => {
    Object.assign(mockUser, req.body);
    return res.json(mockUser);
  });
});
