import { Country } from "@app/graphql/graphql";
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
};
