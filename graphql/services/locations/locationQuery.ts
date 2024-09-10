import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import {
  CityResponse,
  CountryResponse,
  Id,
  StateResponse,
} from "@app/graphql/graphql";
import { _ } from "@app/graphql/middileware/axios";
import { Context } from "@app/app/api/graphql";
import { AxiosError } from "axios";
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
  getCitiesByState: async (
    _parent: unknown,
    args: { input: Id },
    _context: Context
  ) => {
    try {
      const cities = await _.get<CityResponse>(`/cities/${args.input.id}`).then(
        (res) => res.data.cities
      );
      if (!cities) {
        throw new GraphQLError("No states found", {
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
};
