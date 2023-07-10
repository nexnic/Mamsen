import {navDefault, DefaultIcon} from '../../data/variables'
import {checkSosialMedia} from '../../tools/CheckSocialMedia'
export const templetNav = () => {


    // Default Setting
        // Nav Default 
        const DefaultVariable = navDefault
        const {logo:logosrc, logoAlt, Links} = DefaultVariable
        const {home, about, contact} = Links
        // Icon Default 
        const icon = DefaultIcon
        const {search:searchClass, filter:filterClass} = icon 

        
    
    // Select element 
        const nav = document.querySelector('nav') 
        nav.setAttribute('id', 'navigation')

    // Logo 
        // Container 
            const logoCon = document.createElement('div')
            logoCon.setAttribute('id', 'navigation__logo')
        // Logo 
            const imgLogo = document.createElement('img')
            imgLogo.setAttribute('id', 'logo__small')
            imgLogo.src = logosrc
            imgLogo.alt = logoAlt
    // Links 
        // Container 
            const linksCon = document.createElement('ul')
            linksCon.setAttribute('id', 'navigation__links')
            
            // Home 
                const Home = document.createElement('a')
                Home.setAttribute('id', 'nav__links')
                Home.innerText = home.title
                Home.href = home.src

            // About 
                const About = document.createElement('a')
                About.setAttribute('id', 'nav__links')
                About.innerText = about.title
                About.href = about.src

            // Contact
                const Contact = document.createElement('a')
                Contact.setAttribute('id', 'nav__links')
                Contact.innerHTML = contact.title
                Contact.href = contact.src
        
                nav.append(logoCon)
                logoCon.append(imgLogo)
                nav.append(linksCon)
                linksCon.append(Home)
                linksCon.append(About)
                linksCon.append(Contact)
                
    // Btn 
        // Container 
            const btnCon = document.createElement('ul')
            btnCon.setAttribute('id', 'navigation__iconLinks')
            
            const data = checkSosialMedia()
            console.log(data)
            nav.append(btnCon)
            data.forEach(([key, value]) => {

                const btnlist = document.createElement('li')
                const button = document.createElement('button')
                button.setAttribute('id', 'btn__icon')
                const Iconelm = document.createElement('i')
                Iconelm.setAttribute('id', 'icon__btn')
                Iconelm.classList.add(value.iconmain, value.iconsub)
                button.addEventListener('click', () => {
                    window.open(value.link)
                })

                
                btnCon.append(btnlist)
                btnlist.append(button)
                button.append(Iconelm)

            })

        // Seperator 
            const seperatorli = document.createElement('i')
            const seperator = document.createElement('p')
            seperator.innerText ='|'

            btnCon.append(seperatorli)
            seperatorli.append(seperator)

        // Search button
            const searchli = document.createElement('li')
            btnCon.append(searchli)

            const searchbtn = document.createElement('button')
            searchbtn.setAttribute('id', 'btn__icon')
            searchbtn.addEventListener('click', () => {
                console.log('click')
            })
            searchli.append(searchbtn)


            const searchicon = document.createElement('i')
            searchicon.classList.add(searchClass.one, searchClass.two)

            searchbtn.append(searchicon)
        
        // Filter button 
            const filterli = document.createElement('li')
            btnCon.append(filterli)

            const filterbtn = document.createElement('button')
            filterbtn.setAttribute('id', 'btn__icon')
            filterbtn.addEventListener('click', () => {
                console.log('click')
            })
            filterli.append(filterbtn)

            const filtericon = document.createElement('i')
            filtericon.classList.add(filterClass.one, filterClass.two)
            filterbtn.append(filtericon)

    return nav

}