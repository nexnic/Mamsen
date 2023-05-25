
/**
 * 
 * @param {String} data 
 * @returns 
 * ```JS
 * Try to remove item for localstorage
 * @returns true 
 * or 
 * @returns false 
 * ```
 */
export const remove = (data) => {
    try {
        localStorage.removeItem(data)
        return true 
    }catch {
        return false
    }
}