import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import {
  CityResponse,
  CountryResponse,
  Ids,
  StateResponse,
} from "@app/graphql/graphql";
import { _ } from "@app/graphql/middileware/axios";
import { Context } from "@app/pages/api/graphql";
import { AxiosError } from "axios";
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
      if (error instanceof AxiosError && error.response?.status === 404) {
        throw new GraphQLError("No countries found", {
          extensions: {
            code: ErrorType.NOT_FOUND_ERROR,
            __typeName: "NotFoundError",
          },
        });
      }
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  getStatesByIds: async (
    parent: unknown,
    args: { input: Ids },
    context: Context
  ) => {
    try {
      console.log("fire", args);
      const states = await _.post<StateResponse>("/getStatesByIds", {
        ids: args.input.ids,
      }).then((res) => res.data.states);
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
      if (error instanceof AxiosError && error.response?.status === 404) {
        throw new GraphQLError("No states found", {
          extensions: {
            code: ErrorType.NOT_FOUND_ERROR,
            __typeName: "NotFoundError",
          },
        });
      }
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  getCitiesByIds: async (
    parent: unknown,
    args: { input: Ids },
    context: Context
  ) => {
    try {
      const cities = await _.post<CityResponse>("/getCitiesByIds", {
        ids: args.input.ids,
      }).then((res) => res.data.cities);
      if (!cities) {
        throw new GraphQLError("No cities found", {
          extensions: {
            code: "NOT_FOUND",
            __typeName: "NotFoundError",
          },
        });
      }
      return {
        cities,
        __typeName: "CityResponse",
      };
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        throw new GraphQLError("No cities found", {
          extensions: {
            code: ErrorType.NOT_FOUND_ERROR,
            __typeName: "NotFoundError",
          },
        });
      }
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
