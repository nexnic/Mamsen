// Validator 


/**
 * // ValidatorEmail
 * @param {*} Email 
 * @returns 
 * 
 * @example
 * ``` JS 
 * // Check 2 variable email and regkey
 *  if Email Pass True ;
 * else Email fails False;
 * ```
 */
export const ValidatorEmail = (Email) => {
    const regKey = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Check = regKey.test(Email)
    if(Check){
        return true
    } else {
        return false
    }
}

/**
 * // Validator Password
 * @param {String and Number} password 
 * @returns 
 * 
 * @example
 * ``` JS
 * // Check the 2 Variable 
 *  if Password is Equality to Regkey;
 *  Return true;
 *  else password is not equal to RegKey:
 *  Return false;
 * ```
 */

export const validatorPWD = (password) => {
    let regKey = /^[a-zA-Z0-9_]+$/;
    let Check = regKey.test(password)
    if(Check){
        return true 
    } else {
        return false
    }
}

/**
 * ```
 *  Validator UserName
 * ```
 * @param {*} UserName 
 * @returns 
 * 
 * @example
 * ``` JS
 * // Check the 2 Variables if they are Equliy 
 *  if UserName is Equality to RegKey;
 *  Return true;
 *  else; 
 *  return false;
 * ```
 */

export const validatorUserName = (UserName) => {
    let regKey = /^[a-zA-Z0-9_]+$/
    let Check = regKey.test(UserName)
    if(Check) {
        return true
    } else {
        return false
    }
} 