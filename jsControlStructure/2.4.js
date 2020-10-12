//Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.
// nombres pairs / 2
// nombres impairs * 3
// define even numbers : (x % 2 == 0)
// define odd numbers : (x % 2 == 1)

let x = 1;

while (x <=100) {
    if (x % 2 == 0) {
        console.log(x / 2);
    } else {
        console.log(x * 3);
    }
    x+=1;
}

