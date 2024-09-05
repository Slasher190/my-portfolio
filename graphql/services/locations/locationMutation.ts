import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { CountryResponse, Ids } from "@app/graphql/graphql";
import { _ } from "@app/graphql/middileware/axios";
import { Context } from "@app/pages/api/graphql";
import { GraphQLError } from "graphql";

export const locationMutation = {
  getCountriesByIds: async (
    parent: unknown,
    args: { input: Ids },
    context: Context
  ) => {
    try {
      const countries = await _.post<CountryResponse>("/getCountriesByIds", {
        ids: args.input.ids,
      }).then((res) => res.data.countries);
      if (!countries) {
        throw new GraphQLError("No countries found", {
          extensions: {
            code: "NOT_FOUND",
            __typeName: "NotFoundError",
          },
        });
      }
      return {
        countries,
        __typeName: "CountryResponse",
      };
    } catch (error) {
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
