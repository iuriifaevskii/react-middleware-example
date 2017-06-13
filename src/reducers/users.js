import {
    FETCH_USERS
} from '../actions/types';

export default function(state =[], action) {
    switch(action.type){
        case FETCH_USERS:
            debugger 
            console.log('ОТРИМУЄМО В REDUCER ACTION БЕЗ PROMICE, А ДАЛІ ОБРОБЛЯЄМО',action);
        
            return [...state,...action.payload];
            
    }

    return state;
}