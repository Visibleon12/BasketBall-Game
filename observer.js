import {ofType,ActionsObservable} from 'redux-observable'
import {Observable,empty, of} from 'rxjs'
import {map, bufferTime, filter,switchMap,mergeMap} from 'rxjs/operators'
export default function logAction(action){
    return action.pipe(ofType('Entry'),
     
    mergeMap(async(action)=>{
       a=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
            .then((response) => response.json())
            .then((responseJson) => {
               return ({date:responseJson.datetime,unixTime:responseJson.unixtime})
           
            })
            .catch((error) => {
            console.error(error);
            })
            
             b=a.date.slice(0,10)
             c=a.date.slice(11,19)
             console.log(a)
         return({
        type:'onModalon',
        value:{name:action.name,score:action.score,date:b+' '+c,unixTime:a.unixTime}
             })
         
    })
    )
    

}
