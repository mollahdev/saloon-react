/**
 * External dependencies 
 */ 
import { createReduxStore, register } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
/**
 *  Internal dependencies
 */ 
import { ReducerAction } from 'types/store';
import staticData from './static';

interface InitialState {
    list: {}[]
    edit: {} 
}

apiFetch.use( apiFetch.createRootURLMiddleware( staticData.apiEndpoint ) );
const initialState = {
    list: [],
    edit: {}
}

const STORE_REDUCER = ( state: InitialState = initialState, action: ReducerAction ): InitialState => {
    switch ( action.type ) {
        case 'SET_SERVICES':
            return {
                ...state,
                list: action.payload as []
            };
        
        case 'CREATE_SERVICE':
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload as object
                ]
            };

        case 'SET_EDIT':
            return {
                ...state,
                edit: action.payload as object
            };
    }

    return state;
}



const STORE_ACTIONS = {
    setServices<T>( data: T ) {
        return {
            type: 'SET_SERVICES',
            payload: data,
        };
    },

    createService( data: object ) {
        return {
            type: 'CREATE_SERVICE',
            payload: data,
        };
    },
    
    setEdit( data: object ) {
        return {
            type: 'SET_EDIT',
            payload: data,
        };
    },

    fetchFromAPI( path: string ) {
        return {
            type: 'FETCH_FROM_API',
            path
        };
    },
}

const STORE_SELECTORS = {
    getServices( state: InitialState ) {
        return state.list
    },
    
    getEdit( state: InitialState ) {
        return state.edit
    },
}

const STORE_CONTROLS = {
    FETCH_FROM_API( action: {path: string} ) {
        return apiFetch( { path: action.path } );
    },
}

const STORE_RESOLVERS = {
    *getServices(): any {
        const data = yield STORE_ACTIONS.fetchFromAPI( 'services' );
        return STORE_ACTIONS.setServices( data.data );
    }
}


register( createReduxStore( 'admin/service', {
    reducer     : STORE_REDUCER,
    actions     : STORE_ACTIONS,
    selectors   : STORE_SELECTORS,
    controls    : STORE_CONTROLS,
    resolvers   : STORE_RESOLVERS,
}))