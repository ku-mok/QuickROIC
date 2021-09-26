import { useMemo } from "react";
import { useHistory } from "react-router";
import { HeaderProps } from "../../organisms/Header";
export const useTabItems = (isDataLoaded = true): HeaderProps["tabItems"] => {
  const history = useHistory();
  const tabItems = useMemo<HeaderProps["tabItems"]>(
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
        disabled: !isDataLoaded,
      },
      {
        label: "ROIC-WACCグラフ",
        onClick: () => history.push("/scatter"),
        disabled: !isDataLoaded,
      },
      {
        label: "ROICツリー",
        onClick: () => history.push("/tree"),
        disabled: !isDataLoaded,
      },
    ],
    [history, isDataLoaded]
  );
  return tabItems;
};
