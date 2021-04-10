//https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
function well(x){
    const good = x.map(el => el.filter(elem => String(elem).toLowerCase() === 'good').length).reduce((acc,el) => acc + el, 0);
    switch(good){
        case 0: return 'Fail!';
          break;
        case 1: 
        case 2: return 'Publish!';
          break;
        default: return 'I smell a series!'
          break;    
    }
    }