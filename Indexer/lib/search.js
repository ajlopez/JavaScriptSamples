
function or(index1, index2) {
    const result = {};
    
    for (let n in index1)
        result[n] = index1[n];
        
    for (let n in index2)
        if (result[n])
            result[n] += index2[n];
        else
            result[n] = index2[n];
            
    return result;
}

module.exports = {
    or
};