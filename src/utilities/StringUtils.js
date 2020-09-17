

export const isNullUndefinedOrEmpty = (value) => {
    var isValid = true;
    if(typeof(value) === "undefined" || value === ""){
        isValid = false;
    }

    return isValid;
}