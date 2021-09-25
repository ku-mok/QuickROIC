import gql from "graphql-tag";

export const UPLOAD_EXCEL = gql`
  mutation UploadExcel($files: [Upload!]!) {
    uploadSpeedaExcel(files: $files) {
      companyData {
        companyName
        metrics {
          metricsName
          metricsValues
          metricsYears
        }
      }
    }
  }
`;

export const GET_LOCAL_DATA = gql`
  query GetLocalData {
    localCompanyData @client {
      companyName
      metrics {
        metricsName
        metricsValues
        metricsYears
      }
    }
  }
`;
