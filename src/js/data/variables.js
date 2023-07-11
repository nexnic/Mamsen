export const api = {
    base_URL: 'https://mamsenapi.frontendkenterik.no',
    posts: '/wp-json/wp/v2/posts',
    media: '/wp-json/wp/v2/media',
}


export const SiteLocal ={
    home: 'Mamsen | Home',
}

export const loadingSpec = {
    logo: './public/image/logo/Mamsen-1 (3).png',
    logoAlt: 'Image of logo to Mamsen',
    Headline: 'Mamsen',
    SubHeadLine: 'Loading API...'


}

export const sosialMedia = {
    "facebook": {
        link: 'https://www.facebook.com/',
        endPoint: '',
        iconmain: 'fa-brands',
        iconsub: 'fa-facebook',
        use: true
    },
    "instagrame":{
        link:'https',
        endPoint: '',
        iconmain: 'fa-brands',
        iconsub: 'fa-facebook',
        use: true
    },
    "tiktok":{
        link:'https://www.tiktok.com/',
        endPoint: '',
        iconmain: 'fa-brands',
        iconsub: 'fa-facebook',
        use: false
    },
    "instagram": {
        link: 'https://www.instagram.com/',
        endPoint: '',
        iconmain: 'fa-brands',
        iconsub: 'fa-facebook',
        use: true
    },
    "twitter": {
        link: 'https://twitter.com/',
        endPoint: '',
        iconmain: 'fa-brands',
        iconsub: 'fa-facebook',
        use:false
    }

}
    



export const navDefault = {
    logo: './public/image/logo/Mamsen-1 (3).png',
    logoAlt: 'Image of logo to Mamsen',
    Links: {
        home: {
            title: 'Home',
            src: '',
        },
        about: {
            title: 'About',
            src: '',
        },
        contact: {
            title: 'Contact',
            src: ''
        }

    },

    icon: {
        facebook: {
            1: 'fa-brands',
            2: 'fa-facebook',
        },
        instagrame: {
            1: 'fa-brands',
            2: 'fa-instagram',
        },
        snapchat: {
            1: 'fa-brands',
            2: 'fa-snapchat'
        },
        tiktok: {
            1: 'fa-brands',
            2: 'fa-tiktok'
        },
        twitter: {
            1: 'fa-brands',
            2: 'fa-twitter'
        }
    } 
}

export const DefaultIcon = {

    'search': {
        one: 'fa-solid',
        two: 'fa-magnifying-glass'
    },

    'filter': {
        one: 'fa-solid',
        two: 'fa-filter'
    }

}


export const errorID = {
    0: {
        header: 'api', 
        errorMSG: 'Fail get data'
    }

}