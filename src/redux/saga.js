import {takeEvery, put,call, all, takeLatest, select} from 'redux-saga/effects';
import { MosApi } from '../utils/api/api_info';
import { getDevidends } from '../utils/api/dividends';
import { getPromotions } from '../utils/api/promotions';
import { GET_COMPANIES, FETCH_COMPANY,  HIDE_LOADER, SET_LOADING, FETCH_COMPANIES, SET_DEVIDENTS, SET_PROMOTIONS } from "./types";

 function* sagaFetchCompanies(){
  yield  takeEvery(FETCH_COMPANIES,sagaWorkerCompanies)
}



function* sagaWorkerCompanies(){
    
    try{
      yield put({type:SET_LOADING})  
      const payload = yield call(MosApi)
      yield put({type:GET_COMPANIES,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}



 function* sagaFetchCompany(){
  yield  takeLatest(FETCH_COMPANY,sagaWorkerCompany)
}



function* sagaWorkerCompany(){
    
    try{
      const {nameCompany} = yield select((state)=>state)

      yield put({type:SET_LOADING}) 
       const dividends = yield call(getDevidends,nameCompany)
       const promotions = yield call(getPromotions,nameCompany)

      yield put({type:SET_DEVIDENTS,dividends})
      yield put({type:SET_PROMOTIONS,promotions})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}

export function* rootSaga() {
  yield all([
    sagaFetchCompanies(),
    sagaFetchCompany()
  ])
};