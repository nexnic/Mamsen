
export async function GetHeader() {
    try {
        const response = await fetch(
            'https://mamsenapi.frontendkenterik.no/wp-json/wp/v2/posts?categories=3',
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