
import {api} from '../../data/variables'

export async function GetMedia(id) {
    const {base_URL, posts, media} = api 
    try {
        const response = await fetch(
            `${base_URL}${media}`,{
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                }
            }
        )
        console.log(response)
        if(response.ok){
            if(response.status >= 200 && response.status <= 299){
                const data = await response.json()
                console.log(data)
            }
        }
    } catch (error) {
        console.log(error)
    }
}