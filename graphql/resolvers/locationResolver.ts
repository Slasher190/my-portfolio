import { Country, State } from "@app/graphql/graphql";
import { ErrorType } from "@app/graphql/constants/errorEnum";

export const locationResolvers = {
  CountryResult: {
    __resolveType(obj: {
      countries?: Country[];
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      if (obj.countries) {
        return "CountryResponse";
      }
      if (obj.error.message) {
        return "";
      }
    },
  },
  StateResult: {
    __resolveType(obj: {
      states?: State[];
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      if (obj.states) {
        return "StateResponse";
      }
      if (obj.error.message) {
        return "";
      }
    },
  },
};
