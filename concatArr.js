function concatArray(array1, array2) {
    if((arr1 === null || arr1 === undefined ) && (arr2 === null || arr2 === undefined)) return undefined;
    if(arr1.length === 0 && arr2.length === 0) return [];
    if(arr1.length === 0 ||arr1 === null || arr1 === undefined ||
        arr2.length === 0 ||arr2 === null || arr2 === undefined    ) return arr1.concatArray(array2);
}