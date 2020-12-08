import { GET_COMPANIES, HIDE_LOADER, SET_LOADING,FETCH_COMPANY, SET_DEVIDENTS, SET_PROMOTIONS } from "./types";

const initialState ={
    companyDetailts:{},
    companies:[],
    loading:false,
    nameCompany:'',
    dividends:[],
    promotions:[],

}

const handlers = {
    [GET_COMPANIES]:(state,action) =>({...state, companies:action.payload, loading:false}),
    [SET_DEVIDENTS]:(state,action) =>({...state, dividends:action.dividends }),
    [SET_PROMOTIONS]:(state,action)=>({...state, promotions:action.promotions  }),
    [SET_LOADING]:(state)=>({...state,  loading:true}),
    [HIDE_LOADER]:(state) =>({...state,loading:false}),
    [FETCH_COMPANY]:(state,action) =>({...state, nameCompany:action.payload}),
    DEFAULT:(state) => state
}

export const reducer = (state=initialState,action) =>{
    
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}