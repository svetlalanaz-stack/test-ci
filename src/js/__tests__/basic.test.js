import healthColor from '../basic';

const dataList = [
  { name: 'Маг', health: 90 },
  { name: 'НеМаг', health: 40 },
  { name: 'Нежить', health: 10 },
];

test.each(dataList)('проверка здоровья для $name', function(item) {
  const result = healthColor(item);
  expect(result).toBeDefined();
});



