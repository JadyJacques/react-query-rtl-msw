import { screen, render, act, waitForElementToBeRemoved } from "./utils";

import HomePage from "../pages/index";
import { graphql } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  graphql.query("getNarutinho", (req, res, ctx) => {
    return res(
      ctx.data({
        Character: {
          name: {
            first: "Naruto",
            middle: null,
            last: "Uzumaki",
            full: "Naruto Uzumaki",
            native: "うずまきナルト",
          },
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.setTimeout(30000);

describe('Page > Home', () => {

    test("test narutinho", async () => {
      render(<HomePage />);
    
      expect(screen.getByText("heading")).toBeInTheDocument();
    
      expect(await screen.findByText(/naruto/i)).toBeInTheDocument();
    });

    test('test trocando os rolê', async () => {
        server.use(graphql.query("getNarutinho", (req, res, ctx) => {
            return res(
              ctx.data({
                Character: {
                  name: {
                    first: "Kakashi",
                    middle: null,
                    last: "Uzumaki",
                    full: "Kakashi Uzumaki",
                    native: "うずまきナルト",
                  },
                },
              })
            );
          })
        )
        render(<HomePage />);
      
        expect(screen.getByText("heading")).toBeInTheDocument();
      
        expect(await screen.findByText(/kakashi/i)).toBeInTheDocument();
    })
})
