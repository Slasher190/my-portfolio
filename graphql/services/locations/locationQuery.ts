import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { Ids } from "@app/graphql/graphql";
import { Context } from "@app/pages/api/graphql";
import axios from "axios";
import { GraphQLError } from "graphql";

const _ = axios.create({
  baseURL: "http://localhost:8000/location",
});

export const locationQuery = {
  // getCountriesByIds: async (
  //   _parent: unknown,
  //   args: { input: Ids },
  //   context: Context
  // ) => {
  //   const { ids } = args.input;
  //   if (!ids || !ids.length) {
  //     throw new GraphQLError("Please provide some ids", {
  //       extensions: {
  //         code: "BAD_USER_INPUT",
  //         argumentName: "id",
  //         __typeName: 'NotFoundError'
  //       },
  //     });
  //   }

  //   const countries = await _.get("/getCountriesByIds").then((res) => res.data.countries);
  //   console.log(countries, "countries");
  //   if (!countries) {
  //     throw new GraphQLError('No countries found', {
  //       extensions: {
  //         code: 'NOT_FOUND',
  //         __typeName: 'NotFoundError'
  //       }
  //     })
  //   }

  //   if (ids && ids.length) {
  //     const countries = _.get("/getCountriesByIds");
  //     return {
  //       countries,
  //       __typeName: 'CountryResponse'
  //     };
  //   }
  // },
  getCountries: async (_parent: unknown, args: unknown, context: Context) => {
    try {
      const countries = await _.get("/countries").then(
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
};
