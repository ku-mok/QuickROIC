import { useCompanySettings } from "./useCompanySettings";
import { companySettingVar } from "../../store";
import { act, renderHook } from "@testing-library/react-hooks";

it("default value is empty array", () => {
  const { result } = renderHook(() => useCompanySettings());
  expect(result.current).toStrictEqual([]);
});

it("can set value", () => {
  const { result } = renderHook(() => useCompanySettings());
  act(() => {
    companySettingVar([
      { color: "#ff0000", visibility: false, name: "test1" },
      { color: "#ffff00", visibility: false, name: "test2" },
      { color: "#ffff00", visibility: true, name: "test3" },
    ]);
  });
  expect(result.current).toStrictEqual([
    {
      color: "#ff0000",
      visibility: false,
      name: "test1",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: false,
      name: "test2",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: true,
      name: "test3",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
  ]);
});

it("can update color", () => {
  const { result } = renderHook(() => useCompanySettings());
  act(() => {
    companySettingVar([
      { color: "#ff0000", visibility: false, name: "test1" },
      { color: "#ffff00", visibility: false, name: "test2" },
      { color: "#ffff00", visibility: true, name: "test3" },
    ]);
  });
  act(() => {
    result.current[0].setColor("#ffffff");
  });
  expect(result.current).toStrictEqual([
    {
      color: "#ffffff",
      visibility: false,
      name: "test1",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: false,
      name: "test2",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: true,
      name: "test3",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
  ]);
});

it("can update visibility", () => {
  const { result } = renderHook(() => useCompanySettings());
  act(() => {
    companySettingVar([
      { color: "#ff0000", visibility: false, name: "test1" },
      { color: "#ffff00", visibility: false, name: "test2" },
      { color: "#ffff00", visibility: true, name: "test3" },
    ]);
  });
  act(() => {
    result.current[2].setVisibility(false);
  });
  expect(result.current).toStrictEqual([
    {
      color: "#ff0000",
      visibility: false,
      name: "test1",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: false,
      name: "test2",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
    {
      color: "#ffff00",
      visibility: false,
      name: "test3",
      setColor: expect.anything(),
      setVisibility: expect.anything(),
    },
  ]);
});
