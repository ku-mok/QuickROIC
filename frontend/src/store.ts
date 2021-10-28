import { makeVar, TypePolicies } from "@apollo/client";
import { CompanyData } from "./generated/graphql";
import { gql } from "graphql-tag";

export const localCompanyDataVar = makeVar<CompanyData[]>([]);
export const isDataLoadedVar = makeVar(false);
export const companySettingVar = makeVar<
  { name: string; color: string; visibility: boolean }[]
>([]);
export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      localCompanyData: {
        read() {
          return localCompanyDataVar();
        },
      },
    },
  },
};
export const typeDefs = gql`
  extend type Query {
    localCompanyData: [CompanyData!]!
  }
`;
