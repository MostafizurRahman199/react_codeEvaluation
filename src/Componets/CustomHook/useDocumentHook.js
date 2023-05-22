
import { useEffect } from 'react';

function useDocumentHook(count){

    useEffect(()=>{
        document.title = `Count ${count}`;
        },[count])

 

}

export default useDocumentHook