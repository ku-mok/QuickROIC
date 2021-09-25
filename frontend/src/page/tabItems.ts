import { useMemo } from "react";
import { useHistory } from "react-router";
import { HeaderProps } from "../organisms/Header";
export const useTabItems: () => HeaderProps["tabItems"] = () => {
  const history = useHistory();
  const tabItems = useMemo(
    () => [
      {
        label: "Home",
        onClick: () => history.push("/"),
      },
      {
        label: "新規分析",
        onClick: () => history.push("/new"),
      },
      {
        label: "データ確認",
        onClick: () => history.push("/table"),
      },
      {
        label: "ROIC-WACCグラフ",
        onClick: () => history.push("/scatter"),
      },
      {
        label: "ROICツリー",
        onClick: () => history.push("/tree"),
      },
    ],
    [history]
  );
  return tabItems;
};
