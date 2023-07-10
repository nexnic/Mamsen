import {loadingSpec} from '../../data/variables'

export const templetLoading = () => {
    const defaultdata = loadingSpec 
    const {logo:imgsrc, logoAlt:imgAlt,  Headline, SubHeadLine} =  defaultdata

    // Get Loading Screen
    const loading = document.querySelector('#loading')

    // Container
    // Create & setting 
    const container = document.createElement('div')
    container.setAttribute('id', 'loading__container')


    // Logo
    // Create & setting 
    const logo = document.createElement('img')
    logo.src = imgsrc
    logo.alt = imgAlt
    logo.setAttribute('id', 'loading__container--logo')


    // Headline
    const headLine = document.createElement('h1')
    headLine.innerText = Headline

    // Sub-Headline
    const subHedline = document.createElement('h3')
    subHedline.innerText = SubHeadLine

    // Spin
    // Create & Setting 
    const spin = document.createElement('div')
    spin.classList.add('lds-ellipsis')
        // Spin one  
        const spinone = document.createElement('div')
        // Spin Two
        const spintwo = document.createElement('div')
        // Spin Three 
        const spinthree = document.createElement('div')




    loading.append(container)
    container.append(logo)
    container.append(headLine)
    container.append(subHedline)
    container.append(spin)
    spin.append(spinone)
    spin.append(spintwo)
    spin.append(spinthree)

    return loading 

}

// <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>