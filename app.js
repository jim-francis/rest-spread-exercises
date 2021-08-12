const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => nums.reduce((min, num) => num > min ? min : num);

const mergeObj = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

const doubleAndReturnArgs = (arr, ...nums) => {
    const newArr = [...arr];
    nums.forEach((num) => {
        newArr.push(num * 2);
    })
    return newArr;
};

const removeRandomItem = (items) => {
    const copy = [...items];
    copy.splice(Math.floor(Math.random() * copy.length), 1);
    return copy;
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

//deleted value and key returning undefined? checked against solution
const removeKey = (obj, key) => {
    const newObj = { ...obj }
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    const newObj = { ...obj1, ...obj2 }
    return newObj;
}

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}