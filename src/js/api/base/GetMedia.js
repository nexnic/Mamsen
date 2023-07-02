export async function GetMedia() {
    try {
        const response = await fetch(
            'url',{
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