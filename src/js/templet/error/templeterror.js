

export const templetError = (key) => {
    const data = key
    console.log(data)

    const container = document.querySelector('#errorMsg')

    // Error Content 
        const content = document.createElement('div')
        content.setAttribute('id', 'errorMsg__content')

    // Headline 
        const h3 = document.createElement('h3')
        h3.innerText = 'Error Msg'

    // Error Message 
        const p = document.createElement('p')
        p.innerText = data.message

    
    container.append(content)
    content.append(h3)
    content.append(p)
    

    setTimeout(() =>{
        container.innerHTML = ''

    }, 10000)

}