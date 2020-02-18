export default  function getData(data,sortKey,sortorderName,sortorderScore,sortorderDate){
        
    if(sortKey==='Name'){
    
        if(sortorderName==='Des'){
               return data.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA > nameB) 
                    return -1 
                if (nameA < nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        }
        else{
            return data.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) 
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        }
    }
    else if(sortKey==='Score'){
    
        if(sortorderScore==='Des'){
            return data.sort((a,b) => b.score-a.score) 
        }
        else{
            return data.sort(function(a,b){return a.score-b.score})
        }
    }
    else{
        
        if(sortorderDate==='Des')
            
        return data.sort(function(a,b){return b.unixTime-a.unixTime})
        else{
            
        return data.sort(function(a,b){return a.unixTime-b.unixTime})

        }
    }
}