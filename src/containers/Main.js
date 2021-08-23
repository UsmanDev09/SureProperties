
import React, {useEffect} from 'react';
import SearchProperty from '../containers/property/SearchProperty';
import Loading from '../containers/Loading'

function Main(){
    const [isLoading, setIsLoading] = React.useState(true);
    const handleLoading = () => {
        setIsLoading(false)
    }


    useEffect(() => {
        window.addEventListener("load", handleLoading )

        return () => window.removeEventListener("load", handleLoading);
    }, [])

    return(
        isLoading ? 
            <Loading/>   : <SearchProperty/>
        
      
    )
}
export default Main;