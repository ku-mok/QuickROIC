import { createCsvString } from "./createCsvString";

it("create csv string", () => {
  const expected = "hoge,fuga,piyo\n1,2,3\n4,5,6";
  const actual = createCsvString(
    [
      { hoge: 1, fuga: 2, piyo: 3 },
      { hoge: 4, fuga: 5, piyo: 6 },
    ],
    [{ key: "hoge" }, { key: "fuga" }, { key: "piyo" }]
  );
  expect(actual).toBe(expected);
});

it("ignore columns", () => {
  const expected = "hoge,piyo\n1,3\n4,6";
  const actual = createCsvString(
    [
      { hoge: 1, fuga: 2, piyo: 3 },
      { hoge: 4, fuga: 5, piyo: 6 },
    ],
    [{ key: "hoge" }, { key: "piyo" }]
  );
  expect(actual).toBe(expected);
});
