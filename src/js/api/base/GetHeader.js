import {api} from '../../data/variables'
import {headerData} from '../../templet/header/headerData'
import {errorMSG} from '../../tools/error'

export async function GetHeader() {
    const {base_URL, posts, media} = api 
    try {
        
        const response = await fetch(
           `${base_URL}${posts}?categories=3&_embed`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                }
            }
        )
        console.log(response)
        if(response.ok) {
            const data = await response.json()
            headerData(data)
        }
        if(!response.ok){
            if(response.status >= 400) {
                const data = await response.json()
                errorMSG(data, 0)
            }
        }
    } catch (error) {
        console.log(error)
    }
}