import {GetHeader} from '../api/base/GetHeader'

export const routes = () => {
    const OnPage = document.location.pathname

    const route = router[OnPage] 
    
    const testAI = GetHeader() 
    renderTemplet(route, testAI)
    

}
const BaseTitle = 'Mamsen | Home'


const router = {
    "/": {
        templet: "/src/templets/index.html",
        title: BaseTitle,
    }
}

const renderTemplet = async (route) => {
    // Fetch the templete
    const html = await fetch(route.templet).then((data) => data.text());
    document.title = route.title
    const MainData = await GetHeader()
    


}