
 export function getdat(e) {
console.log("Action",e)
  return{
        type:'Add',  
        payload:e
    }
  }
  export function getda(e) {
    console.log("Action3333333333333333333",e)
      return{
            type:'Ad',  
            payload:e
        }
      }

      export function getd(e) {
        console.log("Actionneeee",e)
          return{
                type:'newvalue',  
                payload:e
            }
          }
