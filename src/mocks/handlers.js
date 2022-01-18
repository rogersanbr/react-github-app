import { rest } from "msw";
import { userMock } from "./user-mock";

export const handlers = [
  rest.get("https://api.github.com/users/:user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userMock));
  }),
];
