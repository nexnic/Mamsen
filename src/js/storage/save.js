
/**
 * 
 * @param {String} key 
 * @param {String} data 
 * @returns 
 * 
 * @example
 * ```JS
 * JSON.stringify save to loacalStorage 
 * @returns true If Pass 
 * @returns false but fail 
 * ```
 */

export const save = (key ,data) => {
    try {
        JSON.stringify(localStorage.setItem(key, data))
        return true 
    } catch {
        return false 
    }
}