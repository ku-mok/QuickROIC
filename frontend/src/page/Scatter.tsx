import React, { useCallback, useMemo, useState } from "react";
import Template from "../template/Template";
import { useRoicWacc, useTabItems, useIntervalFunc } from "./hooks";
import Plot from "react-plotly.js";
import { Layout } from "plotly.js";
import { toScatterData } from "../util/dataTransform";
import {
  Grid,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { PlayArrow, Stop } from "@mui/icons-material";

const Scatter: React.FC = () => {
  const tabItems = useTabItems();
  const [yearIndex, setYearIndex] = useState(0);
  const { isActive: isYearMoving, toggleInterval } = useIntervalFunc(() => {
    setYearIndex((y) => {
      if (y === data[0].metrics.metricsYears.length - 2) {
        return 0;
      }
      return y + 1;
    });
  }, 1000);
  const { data, loading, error } = useRoicWacc((data) => {
    setYearIndex(data[0].metrics.metricsYears.length - 2);
  });
  // TODO: 企業の表示設定
  const companyColor = useMemo<{ [key: string]: string }>(
    () => ({
      Sample1: "red",
      Sample2: "blue",
      Sample3: "green",
    }),
    []
  );
  const roicWaccData = useMemo(
    () => toScatterData(data, "ROIC", "WACC", yearIndex, companyColor),
    [companyColor, data, yearIndex]
  );
  const roicWaccLayout: Partial<Layout> = {
    showlegend: false,
    title: {
      text: "WACC-ROICプロット",
    },
    xaxis: {
      title: "ROIC",
      rangemode: "tozero",
      tickformat: ",.1%",
    },
    yaxis: {
      title: "WACC",
      rangemode: "tozero",
      tickformat: ",.1%",
    },
    shapes: [
      {
        type: "line",
        x0: 0,
        y0: 0,
        // TODO: ROICとWACCのマックスを設定する
        x1: 0.2,
        y1: 0.2,
        xref: "x",
        yref: "y",
        line: {
          width: 1,
          dash: "dot",
        },
      },
    ],
  };
  const nopatCapitalData = useMemo(
    () =>
      toScatterData(
        data,
        "NOPATマージン",
        "投下資本回転率",
        yearIndex,
        companyColor
      ),
    [companyColor, data, yearIndex]
  );
  const nopatCapitalLayout: Partial<Layout> = {
    showlegend: false,
    title: {
      text: "NOPATマージン-投下資本回転率プロット",
    },
    xaxis: {
      title: "NOPATマージン",
      rangemode: "tozero",
      tickformat: ",.1%",
    },
    yaxis: {
      title: "投下資本回転率",
      rangemode: "tozero",
      tickformat: ",.1%",
    },
  };
  const gridSx: SxProps = { display: "flex", justifyContent: "center" };
  return (
    <Template
      tabItems={tabItems}
      tabSelected={3}
      loading={loading}
      error={error}
    >
      {data && data.length > 0 && (
        <>
          <Grid container sx={gridSx}>
            <Grid item md={6} sm={12} sx={gridSx}>
              <Plot data={roicWaccData} layout={roicWaccLayout} />
            </Grid>
            <Grid item md={6} sm={12} sx={gridSx}>
              <Plot data={nopatCapitalData} layout={nopatCapitalLayout} />
            </Grid>
          </Grid>
          <Grid container sx={{ columnGap: 2, alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              表示年度
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={data[0].metrics.metricsYears[yearIndex + 1]}
            >
              {data[0].metrics.metricsYears
                .filter((y, i) => i !== 0)
                .map((y, i) => (
                  <ToggleButton
                    value={y}
                    key={y}
                    onClick={() => {
                      setYearIndex(i);
                    }}
                  >
                    {y}
                  </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <IconButton color="primary" onClick={() => toggleInterval()}>
              {isYearMoving ? <Stop /> : <PlayArrow />}
            </IconButton>
          </Grid>
        </>
      )}
    </Template>
  );
};
export default Scatter;
