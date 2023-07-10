import {sosialMedia} from '../data/variables'

export const checkSosialMedia =  () => {
        const data = sosialMedia
        const socialMediaWithUseTrue = Object.entries(data).filter(([key, value]) => value.use);
        return socialMediaWithUseTrue
}

