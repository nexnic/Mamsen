
/**
 *  // clear localstorage  
 * @example
 * ```JS
 * Clear localstorage 
 * @returns false
 * @returns true 
 * ```
 */

export const clear = () => {
    try {
        localStorage.clear()
        return true 
    }catch {
        return false 
    }
}