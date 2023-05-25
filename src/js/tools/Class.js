

/**
 * Toggel Class 
 * @param {String} element 
 * @param {String} Class
 * 
 * @example 
 * ```js
 * Select Element and Toggel between class
 * ``` 
 */
export const toggleclass = (element,Class) => {
    document.querySelector(`${element}`).classList.toggle(`${Class}`)
}