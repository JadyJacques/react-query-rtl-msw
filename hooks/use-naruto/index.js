import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { client } from "../../services";

const query = gql`
  query getNarutinho {
    Character(search: "naruto") {
      name {
        first
        middle
        last
        full
        native
      }
    }
  }
`;

export const useNaruto = () =>
  useQuery("useNaruto", () => client.request(query));
