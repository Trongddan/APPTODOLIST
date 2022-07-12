const initialState={
        search:"",
        status:'All',
        prioriry:[]
}
const filterReducer =(state=initialState, action)=>{

    switch(action.type){   
        case 'filter/search':
            return{
                    ...state,
                    search:action.payload
                }
        case 'filter/searchStatus':
            return{
                ...state,
                status:action.payload
            }
        case 'filter/searchProriry':
            return{
                ...state,
                prioriry:action.payload
            }    
            
        default:return state    

    }
}
export default filterReducer