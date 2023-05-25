
/**
 * 
 * @param {*} Data 
 * @returns 
 * 
 * @example 
 * ```js
 * Get LocalStorage Data
 * if pass return Data 
 * faile return false 
 * ```
 */
export const load = (Data) =>  {
    try{
        return JSON.parse(localStorage.getItem(Data))
    } catch {
        return false 
    }
}