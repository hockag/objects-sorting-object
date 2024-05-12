const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
//1


function countProps(obj) {
    return Object.keys(obj).length;
}

const userOne = {
    name: 'John',
    age: 30,
    hobby: 'reading',
};

console.log(countProps(userOne));
//2


function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const employee in employees) {
        if (employees[employee] > maxTasks) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }
    }
    return bestEmployee;
}

const employees = {
    John: 10,
    Bob: 20,
    Alice: 15
}

console.log(findBestEmployee(employees));
//3


function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const employee in employees) {
        totalSalary += employees[employee];
    }
    return totalSalary;
}

const salaries = {
    John: 1000,
    Bob: 1500,
    Alice: 1200
};
console.log(countTotalSalary(salaries));
//4


function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (prop in obj) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

const products = [
    { name: 'apple', price: 10 },
    { name: 'banana', price: 15 },
    { name: 'orange', price: 20 }
];

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));
//5


function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
 }

const productsTwo = [
    { name: 'apple', price: 10, quantity: 2 },
    { name: 'banana', price: 15, quantity: 3 },
    { name: 'orange', price: 20, quantity: 1 }
];

console.log(calculateTotalPrice(productsTwo, 'apple'));
console.log(calculateTotalPrice(productsTwo, 'banana'));
console.log(calculateTotalPrice(productsTwo, 'orange'));
//6