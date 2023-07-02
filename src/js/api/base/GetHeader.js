import {api} from '../../data/variables'

export async function GetHeader() {
    const {base_URL, posts, media} = api 
    try {
        
        const response = await fetch(
           `${base_URL}${posts}?categories=3`,
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
            console.log(data)
        }
        if(!response.ok){
            if(response.status === 400) {
                const data = await response.json()
                console.log(data)
            }
        }
    } catch (error) {
        console.log(error)
    }
}