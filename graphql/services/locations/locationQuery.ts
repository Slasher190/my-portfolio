import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { CountryResponse, Id, StateResponse } from "@app/graphql/graphql";
import { _ } from "@app/graphql/middileware/axios";
import { Context } from "@app/pages/api/graphql";
import { GraphQLError } from "graphql";

export const locationQuery = {
  getCountries: async (_parent: unknown, _args: unknown, _context: Context) => {
    try {
      const countries = await _.get<CountryResponse>("/countries").then(
        (res) => res.data.countries
      );
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
  getStatesByCountry: async (
    _parent: unknown,
    args: { input: Id },
    _context: Context
  ) => {
    try {
      const states = await _.get<StateResponse>(
        `/states/${args.input.id}`
      ).then((res) => res.data.states);
      if (!states) {
        throw new GraphQLError("No states found", {
          extensions: {
            code: "NOT_FOUND",
            __typeName: "NotFoundError",
          },
        });
      }
      return {
        states,
        __typeName: "StateResponse",
      };
    } catch (error) {
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
