export async function Getinfo(){
    try {
        const response = await fetch(
            'url',
            {
                method: 'GET', 
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                }
            }

        )
        console.log(response)
        if(response.ok){
            if(response.status === 200){
                console.log(response.json())
            }
        }
    } catch (error) {
        console.log(error)
    }
}