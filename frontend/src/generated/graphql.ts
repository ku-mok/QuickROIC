import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  MetricsValue: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

/** 企業のデータを表す型で企業名称とMetricsの配列を持つ */
export type CompanyData = {
  __typename?: 'CompanyData';
  companyName: Scalars['String'];
  metrics?: Maybe<Array<Maybe<Metrics>>>;
};

/** 企業のデータを表す型で企業名称とMetricsの配列を持つ */
export type CompanyDataInput = {
  companyName: Scalars['String'];
  metrics?: Maybe<Array<Maybe<MetricsInput>>>;
};

export type FileUploadMutation = {
  __typename?: 'FileUploadMutation';
  companyData: Array<CompanyData>;
  ok?: Maybe<Scalars['Boolean']>;
};

/** 財務指標を表す型で年度・指標名称・値を持つ */
export type Metrics = {
  __typename?: 'Metrics';
  metricsName: Scalars['String'];
  value: Scalars['MetricsValue'];
  year: Scalars['Int'];
};

/** 財務指標を表す型で年度・指標名称・値を持つ */
export type MetricsInput = {
  metricsName: Scalars['String'];
  value: Scalars['Float'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadSpeedaExcel?: Maybe<FileUploadMutation>;
};


export type MutationUploadSpeedaExcelArgs = {
  files?: Maybe<Array<Maybe<Scalars['Upload']>>>;
};

export type Query = {
  __typename?: 'Query';
  /** ROICドライバ計算を行うクエリ。dataに計算を行うデータを渡し、metricsに必要なカラムを指定する。デフォルト値（空配列）の場合すべてのカラムが帰る */
  calcDrivers: Array<CompanyData>;
  /** ROIC計算を行うクエリ。dataに計算を行うデータを渡し、metricsに必要なカラムを指定する。デフォルト値（空配列）の場合すべてのカラムが帰る */
  calcRoic: Array<CompanyData>;
  localCompanyData: Array<CompanyData>;
};


export type QueryCalcDriversArgs = {
  data?: Maybe<Array<Maybe<CompanyDataInput>>>;
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCalcRoicArgs = {
  data?: Maybe<Array<Maybe<CompanyDataInput>>>;
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadExcelMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UploadExcelMutation = { __typename?: 'Mutation', uploadSpeedaExcel?: Maybe<{ __typename?: 'FileUploadMutation', companyData: Array<{ __typename?: 'CompanyData', companyName: string, metrics?: Maybe<Array<Maybe<{ __typename?: 'Metrics', year: number, value: any, metricsName: string }>>> }> }> };

export type GetLocalCompanyDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocalCompanyDataQuery = { __typename?: 'Query', localCompanyData: Array<{ __typename?: 'CompanyData', companyName: string, metrics?: Maybe<Array<Maybe<{ __typename?: 'Metrics', metricsName: string, value: any, year: number }>>> }> };


export const UploadExcelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadExcel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadSpeedaExcel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"metricsName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UploadExcelMutation, UploadExcelMutationVariables>;
export const GetLocalCompanyDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocalCompanyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localCompanyData"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metricsName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]}}]} as unknown as DocumentNode<GetLocalCompanyDataQuery, GetLocalCompanyDataQueryVariables>;