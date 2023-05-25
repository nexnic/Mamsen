
/**
 * Change Meta Tag
 * @param {string} MetaTag 
 * @param {String} Content 
 * 
 * @example
 * ```JS
 *  Get element meta and change content 
 * ```
 */
export const SetMetaTAG = (MetaTag, Content) => {
    document.querySelector(`meta[name="${MetaTag}"]`).setAttribute("content", `${Content}`)
} 