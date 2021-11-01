import { useReactiveVar } from "@apollo/client";
import { companySettingVar } from "../../store";
import { useMemo } from "react";
import { CompanySettingProps } from "../../organisms/CompanySetting";

export const useCompanySettings = () => {
  const companySettings = useReactiveVar(companySettingVar);
  const companiesSettingProps = useMemo<CompanySettingProps["companies"]>(
    () =>
      companySettings.map((company, index) => ({
        setColor: (color) => {
          companySettingVar([
            ...companySettings.slice(0, index),
            { ...company, color },
            ...(index === companySettings.length - 1
              ? []
              : companySettings.slice(index + 1)),
          ]);
        },
        setVisibility: (visibility) => {
          companySettingVar([
            ...companySettings.slice(0, index),
            { ...company, visibility },
            ...(index === companySettings.length - 1
              ? []
              : companySettings.slice(index + 1)),
          ]);
        },
        ...company,
      })),
    [companySettings]
  );
  return companiesSettingProps;
};
