export const handleDifferense = (OPEN,CLOSE) =>{
          
            
    return Number(((CLOSE-OPEN)/OPEN*100).toFixed(2))
}