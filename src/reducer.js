export const initialState={
    basket:[],
 
   
}
 const reducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case "Login":
            return{
                
            }
            default:
                return state;

               
    }
    

}
export default reducer;