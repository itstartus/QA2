function getAverageAge(list) {
  return Math.round(list.reduce((acc, el) => acc + el.age, 0)/list.length);//с помощью редьюс посчитали сумму всех возрастов, результат поделили на длинну массива, так как длинна равна количеству участников и округлили результат
}