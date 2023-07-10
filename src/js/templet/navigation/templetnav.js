import {navDefault} from '../../data/variables'
export const templetNav = () => {


    // Default Setting
        const DefaultVariable = navDefault
        const {logo:logosrc, logoAlt, Links} = DefaultVariable
        const {home, about, contact} = Links
        
    
    // Select element 
        const nav = document.querySelector('nav') 

    // Logo 
        // Container 
            const logoCon = document.createElement('div')
        // Logo 
            const imgLogo = document.createElement('img')
            imgLogo.src = logosrc
            imgLogo.alt = logoAlt
    // Links 
        // Container 
            const linksCon = document.createElement('ul')

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
        
    
    // Btn 
        // Container 
            const btnCon = document.createElement('ul')
        


    return nav

}