import healthColor from "../basic";

const dataList = [
  { name: "Маг", health: 90 },
  { name: "НеМаг", health: 40 },
  { name: "Нежить", health: 10 },
];
const handler = test.each(dataList);
handler("prefix %s ah %s", (health) => {
  const result = healthColor(health);

  expect(result).toBeDefined();
});
