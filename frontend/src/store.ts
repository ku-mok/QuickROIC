import { makeVar, TypePolicies } from "@apollo/client";
import { CompanyData } from "./generated/graphql";

export const localCompanyDataVar = makeVar<CompanyData[]>([]);
export const typePolicies: TypePolicies = {
  LocalCompanyData: {
    fields: {
      companyData: {
        read() {
          return localCompanyDataVar();
        },
      },
    },
  },
};
