let global_sum = 0;
function calcValue(string) {
    let [gems_stack, equation] = string.split(':');
    let [gem, stack_raw] = gems_stack.split('.');
    let stack_refined = stack_raw.split('');
    stack_refined.pop();
    stack_refined.shift();
    let stack = stack_refined.join('');
    // console.log(gem, ' < - - >', stack);

    let [multiply_raw, addition] = equation.split(' + ');
    let coeficient = multiply_raw.split('')[0];
    let sum = +coeficient*stack + +addition;
    global_sum += +sum;
    let percent = (sum *100 )/ 10000;
    console.log(gem,sum , percent+ "%");
}

calcValue('Ruby.(50):9x + 28');
calcValue('Onyx.(50):8x + 6');
calcValue('Zircon.(50):8x + 48');
calcValue('Rhodolyte.(50):8x + 20');
calcValue('Emerald.(60):14x + 50');
calcValue('Amethyst.(60):15x + 2');
calcValue('Cyanite.(60):15x + 5');
calcValue('Diamond.(60):15x + 34');
calcValue('Diamond Fire.(60):15x + 21');
calcValue('Diamond Ice.(60):15x + 28');
calcValue('Diamond Andermagic.(60):15x + 56');
calcValue('Diamond Lightning.(60):15x + 17'); 
calcValue('Diamond Poison.(60):15x + 45');

console.log('Global sum -> ', global_sum);