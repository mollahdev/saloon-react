import { createReduxStore, register, dispatch } from '@wordpress/data';
import { addAction } from '@wordpress/hooks';
import { ReducerAction } from 'types/store';

interface InitialState {
    sideMenuOpen: boolean,
    pageTitle: string,
}

const initialState = {
    sideMenuOpen: window.innerWidth >= 678,
    pageTitle: 'Overview',
}

document.title = initialState.pageTitle;
const STORE_REDUCER = ( state: InitialState = initialState, action: ReducerAction ): InitialState => {
    switch ( action.type ) {
        case 'SET_SIDEMENU_OPEN_STATUS':
            return {
                ...state,
                sideMenuOpen: action.payload as boolean
            };
        
        case 'SET_PAGE_TITLE':
            return {
                ...state,
                pageTitle: action.payload as string
            };
    }

    return state;
}

const STORE_ACTIONS = {
    setSideMenuOpenStatus( data: boolean ) {
        return {
            type: 'SET_SIDEMENU_OPEN_STATUS',
            payload: data,
        };
    },
    setPageTitle( data: string ) {
        return {
            type: 'SET_PAGE_TITLE',
            payload: data,
        };
    }
}

const STORE_SELECTORS = {
    getSideMenuOpenStatus( state: InitialState ) {
        return state.sideMenuOpen
    },
    getPageTitle( state: InitialState ) {
        return state.pageTitle
    },
}

register( createReduxStore( 'global', {
    reducer     : STORE_REDUCER,
    actions     : STORE_ACTIONS,
    selectors   : STORE_SELECTORS,
}))

const dispatchState = dispatch('global');
addAction('set-page-title', 'global-state', function( title: string ) {
    document.title = title;
    dispatchState.setPageTitle( title )
})