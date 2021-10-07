import { Layout } from "plotly.js";
import { useMemo } from "react";
import Plot from "react-plotly.js";
import Template from "../template/Template";
import { useRoicWacc, useTabItems } from "./hooks";
import { toTreeData } from "../util/dataTransform";
import { Grid } from "@mui/material";

const Tree: React.FC = () => {
  const tabItems = useTabItems();
  const { data, loading, error } = useRoicWacc();
  const companyColor = useMemo<{ [key: string]: string }>(
    () => ({
      Sample1: "red",
      Sample2: "blue",
      Sample3: "green",
    }),
    []
  );

  const layout: Partial<Layout> = {
    annotations: [
      {
        text: "ROIC",
        showarrow: false,
        align: "center",
        x: 0.135,
        y: 1.1,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "NOPATマージン",
        showarrow: false,
        align: "center",
        x: 0.5,
        y: 1.1,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "投下資本回転率",
        showarrow: false,
        align: "center",
        x: 0.5,
        y: 0.5,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "売上原価率",
        showarrow: false,
        x: 0.868,
        y: 1.1,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "販管費率",
        showarrow: false,
        x: 0.865,
        y: 0.82,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "運転資本回転率",
        showarrow: false,
        align: "center",
        x: 0.88,
        y: 0.5,
        xref: "paper",
        yref: "paper",
      },
      {
        text: "固定資産回転率",
        showarrow: false,
        align: "center",
        x: 0.88,
        y: 0.2,
        xref: "paper",
        yref: "paper",
      },
    ],
    xaxis: {
      domain: [0, 0.3],
      anchor: "y",
    },
    xaxis2: {
      domain: [0.3 + 0.1 / 2, 0.6 + 0.1 / 2],
      anchor: "y2",
    },
    xaxis3: {
      domain: [0.7, 1.0],
      anchor: "y4",
    },
    yaxis: {
      domain: [0, 1],
      tickformat: ",.0%",
      anchor: "x",
    },
    yaxis2: {
      domain: [0, 0.45],
      anchor: "x2",
    },
    yaxis3: {
      domain: [0.55, 1],
      tickformat: ",.0%",
      anchor: "x2",
    },
    yaxis4: {
      domain: [0, 0.35 / 2],
      anchor: "x3",
    },
    yaxis5: {
      domain: [0.45 - 0.35 / 2, 0.45],
      anchor: "x3",
    },
    yaxis6: {
      domain: [0.585, 0.585 + 0.35 / 2],
      tickformat: ",.0%",
      anchor: "x3",
    },
    yaxis7: {
      domain: [1 - 0.35 / 2, 1.0],
      tickformat: ",.0%",

      anchor: "x3",
    },
    showlegend: false,
  };
  const roicData = useMemo(() => toTreeData(data, companyColor), [
    companyColor,
    data,
  ]);
  return (
    <Template
      tabItems={tabItems}
      tabSelected={4}
      loading={loading}
      error={error}
    >
      {data && (
        <Plot
          style={{ width: "100%", height: "80vh" }}
          data={roicData}
          layout={layout}
          config={{ responsive: false }}
        />
      )}
    </Template>
  );
};
export default Tree;
