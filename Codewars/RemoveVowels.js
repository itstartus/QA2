function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];//создали массив с глассными буквами
    return str.split('').filter(el => vowels.indexOf(el.toLowerCase()) === -1).join('');//с помощью фильтр выбираем такие буквы
    //которые есть в массиве str(создался после split), но нет в массиве vowels
  }