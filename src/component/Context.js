import React,{useContext,useEffect,useState} from "react"
const YOUR_APP_ID='727bbdc1';
const API_URL=`http://www.omdbapi.com/?apikey=${YOUR_APP_ID}`
const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true)
    const [movie,setMovie]=useState([])
    const [isError,setIsError]=useState({show:'false',msg:''})
    const [query,setQuery]=useState()
    const getMovies=async(url)=>{
        try{
            const res=await fetch(url);
            const data= await res.json()
            console.log(data);
            if(data.Response==='True'){
                setIsLoading(false)
                setIsError({
                    show:false,
                    msg:null,
                })
                setMovie(data.Search)
            }
            else{
                setIsError({
                    show:true,
                    msg:data.Error,
                })
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        let timerOut=setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)

        },100)
        return()=>clearTimeout(timerOut)
    }, [query])
    return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}
const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}



