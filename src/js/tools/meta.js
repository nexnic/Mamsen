// Import 

/**
 * Change Meta Tag
 * @param {string} MetaTag 
 * @param {String} Content 
 * 
 * @example
 * ```JS
 * // Change MetaTage
 */
export const SetMetaTAG = (MetaTag, Content) => {
    document.querySelector(`meta[name="${MetaTag}"]`).setAttribute("content", `${Content}`)
} 