function myEach(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of newCollection) {
      callback(item);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let item of newCollection) {
      newArray.push(callback(item));
    }
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
      acc = newCollection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of newCollection) {
      if (predicate(item)) return item;
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let filteredArray = [];
    for (let item of newCollection) {
      if (predicate(item)) filteredArray.push(item);
    }
    return filteredArray;
  }
  
  function mySize(collection) {
    const newCollection = Array.isArray(collection) ? collection : Object.keys(collection);
    return newCollection.length;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }