import { useEffect, useState } from "react";

export function useLocalStorage<T>(key : string, initialValue : T){

     const [ value, setValue ] = useState<T>(() => {

          const res = localStorage.getItem(key)

          if(res == null){    
               if(typeof initialValue === "function"){
                    return (initialValue as () => T)()
               }else{
                    return initialValue
               }
          }else{
               return JSON.parse(res)
          }
     })


     useEffect(() => {
          localStorage.setItem(key, JSON.stringify(value))
     },[value, key])

     return [ value, setValue ] 
}