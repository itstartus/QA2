//https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
function switcheroo(x){
    return x.split('').map(el => (el === 'a') ? 'b' : (el === 'b') ? 'a' : el).join('');
}