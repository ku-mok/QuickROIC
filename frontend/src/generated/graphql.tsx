import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  companyData?: Maybe<Array<Maybe<CompanyData>>>;
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
  calcDrivers?: Maybe<Array<Maybe<CompanyData>>>;
  /** ROIC計算を行うクエリ。dataに計算を行うデータを渡し、metricsに必要なカラムを指定する。デフォルト値（空配列）の場合すべてのカラムが帰る */
  calcRoic?: Maybe<Array<Maybe<CompanyData>>>;
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


export type UploadExcelMutation = { __typename?: 'Mutation', uploadSpeedaExcel?: Maybe<{ __typename?: 'FileUploadMutation', companyData?: Maybe<Array<Maybe<{ __typename?: 'CompanyData', companyName: string, metrics?: Maybe<Array<Maybe<{ __typename?: 'Metrics', year: number, value: any }>>> }>>> }> };


export const UploadExcelDocument = gql`
    mutation UploadExcel($files: [Upload!]!) {
  uploadSpeedaExcel(files: $files) {
    companyData {
      companyName
      metrics {
        year
        value
        year
      }
    }
  }
}
    `;
export type UploadExcelMutationFn = Apollo.MutationFunction<UploadExcelMutation, UploadExcelMutationVariables>;

/**
 * __useUploadExcelMutation__
 *
 * To run a mutation, you first call `useUploadExcelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadExcelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadExcelMutation, { data, loading, error }] = useUploadExcelMutation({
 *   variables: {
 *      files: // value for 'files'
 *   },
 * });
 */
export function useUploadExcelMutation(baseOptions?: Apollo.MutationHookOptions<UploadExcelMutation, UploadExcelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadExcelMutation, UploadExcelMutationVariables>(UploadExcelDocument, options);
      }
export type UploadExcelMutationHookResult = ReturnType<typeof useUploadExcelMutation>;
export type UploadExcelMutationResult = Apollo.MutationResult<UploadExcelMutation>;
export type UploadExcelMutationOptions = Apollo.BaseMutationOptions<UploadExcelMutation, UploadExcelMutationVariables>;