// Import 
    // Load 
        import {load} from '../storage/load'
    // Save 
        import {save} from '../storage/save'
/**
 * OnPage 
 * 
 * 
 */

export const onPage = () => {
    const page = load('site')
    if(page === 'home'){
        console.log('test')
    } else{
        save('site', 'home');
    }
}