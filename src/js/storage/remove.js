export const remove = (key) => {
    try{
        localStorage.removeItem(key)
        return true 
    } catch {
        return false
    }
}