import { Typography } from "@mui/material";
import CompanySetting from "../organisms/CompanySetting";
import Template from "../template/Template";
import { useCompanySettings, useTabItems } from "./hooks";

const Setting: React.FC = () => {
  const tabItems = useTabItems(true);
  const companySetting = useCompanySettings();
  return (
    <Template tabItems={tabItems} tabSelected={5}>
      <Typography variant="h6">企業の表示設定</Typography>
      <CompanySetting companies={companySetting} />
    </Template>
  );
};
export default Setting;
