
function checkOorA(collection) {
    let array = [];
    if (typeof (collection) === "object") {
        array = Object.values(collection);
    }
    else array = collection;
    return array;
}

function myEach(collection, cbf) {

    const anArray = checkOorA(collection);

    for (let i = 0; i < anArray.length; i++) {
        cbf(anArray[i]);
    }
    return collection;
}



function myMap(collection, cbf) {
    const anArray = checkOorA(collection);
    const mappedArr = [];
    for (let elem of anArray) {
        mappedArr.push(cbf(elem));
    }
    return mappedArr;
}

function myReduce(collection, cbf, acc) {
    const anArray = checkOorA(collection);
    let i = 0;
    let n = 0;
    if (!acc) {
        i = 1;
        n = anArray[0];
    }
    else {
        i = 0;
        n = acc;
    }

    for (i; i < anArray.length; i++) {
        n = cbf(n, anArray[i], anArray)
    }

    return n;

}

function myFind(collection, cbfp) {
    const anArray = checkOorA(collection);
    for (let i = 0; i < anArray.length; i++) {
        if (cbfp(anArray[i])) {
            return anArray[i]
        }
    }
    return undefined;
}

function myFilter(collection, cbfp) {
    const anArray = checkOorA(collection);
    let retArr = [];
    for (let i = 0; i < anArray.length; i++) {
        if (cbfp(anArray[i])) {
            retArr.push(anArray[i]);
        }
    }
    return retArr;
}

function mySize(collection) {
    let j = 0;
    const anArray = checkOorA(collection);
    for (let elem of anArray) {
        j = j + 1;
    }
    return j;
}

function myFirst(array, n) {
    let nArr = [];
    if (!n) {
        return array[0];
    }
    else {
        for (let i = 0; i < n; i++) {
            nArr.push(array[i]);
        }
        return nArr;
    }
}

function myLast(array, n) {
    let nArr = [];
    if (!n) {
        return array[array.length - 1];
    }
    else {
        for (let i = 0; i < n; i++) {
            nArr.push(array[(array.length - n) + i]);
        }
        return nArr;
    }
}

function myKeys(object) {
    const keyArr = [];
    for (let key in object) {
        keyArr.push(key);
    }
    return keyArr;
}

function myFlatten(array, bool, newArr = []) {
    for (let element of array) {
        if (typeof(element) === typeof([]) && ((bool === true) || (bool === undefined))) {
            if(bool === true) myFlatten(element, !bool, newArr);
            else myFlatten(element, bool, newArr);
        }
        else {
            newArr.push(element);
        }
    }
    return newArr;
}

function myValues(object) {
    const valArr = [];
    for (let key in object) {
        valArr.push(object[key]);
    }
    return valArr;
}