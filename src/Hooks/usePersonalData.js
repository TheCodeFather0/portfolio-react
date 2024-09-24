import { useMyData } from "../Store/myData"

const usePersonalData = () => {
    const data = useMyData(({myData}) => myData)    
    return data
}

export default usePersonalData