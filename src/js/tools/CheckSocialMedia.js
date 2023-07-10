import {sosialMedia} from '../data/variables'

export const checkSosialMedia =  () => {
        const socialMediaWithUseTrue = Object.entries(sosialMedia).filter(([key, value]) => value.use);
        return socialMediaWithUseTrue
}