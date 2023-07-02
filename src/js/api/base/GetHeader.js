export async function GetHeader() {
    try {
        const response = await fetch(
            '',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                }
            }
        )
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}