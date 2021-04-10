//https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript
function paul(x){
    const obj ={
      kata: 5,
      "Petes kata" : 10,
      life : 0,
      eating : 1
    }
    const points = x.map(el => obj[`${el}`]).reduce((acc, el) => acc + el, 0);
    if (points < 40) return 'Super happy!';
    else if (points < 70) return 'Happy!';
    else if (points < 100) return 'Sad!';
    else return 'Miserable!';
    }
    