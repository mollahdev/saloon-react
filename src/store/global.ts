import { createReduxStore, register, dispatch } from '@wordpress/data';
import { addAction } from '@wordpress/hooks';
import { ReducerAction } from 'types/store';
import { UserInterface } from 'types/common';
import { ROLES } from 'types/enum';

interface InitialState {
    sideMenuOpen: boolean,
    pageTitle: string,
    avatorDropdownStatus: boolean,
    currentUser: UserInterface & {
        request?: 'pending' | 'done'
    }
}

const initialState: InitialState = {
    sideMenuOpen: window.innerWidth >= 678,
    pageTitle: '',
    avatorDropdownStatus: false,
    currentUser: {
        login: false,
        name: 'User',
        role: ROLES.VIEWER,
        request: 'pending',
        image: 'https://i.ibb.co/SsTN7qQ/dummy-profile.png'
    }
}

document.title = initialState.pageTitle;
const STORE_REDUCER = ( state: InitialState = initialState, action: ReducerAction ): InitialState => {
    switch ( action.type ) {
        case 'SET_SIDEMENU_OPEN_STATUS':
            return {
                ...state,
                sideMenuOpen: action.payload as typeof initialState.sideMenuOpen
            };
        
        case 'SET_PAGE_TITLE':
            return {
                ...state,
                pageTitle: action.payload as typeof initialState.pageTitle
            };

        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload as typeof initialState.currentUser
            };
        
        case 'SET_AVATOR_DROPDOWN_OPEN':
            return {
                ...state,
                avatorDropdownStatus: action.payload as typeof initialState.avatorDropdownStatus
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
    },
    setCurrentUser( data: object ) {
        return {
            type: 'SET_CURRENT_USER',
            payload: data,
        };
    },
    setIsAvatarDropdownOpen( data: boolean ) {
        return {
            type: 'SET_AVATOR_DROPDOWN_OPEN',
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
    getCurrentUser( state: InitialState ) {
        return state.currentUser
    },
    isAvatarDropdownOpen( state: InitialState ) {
        return state.avatorDropdownStatus
    },
    isPageBlur( state: InitialState ) {
        if( window.innerWidth > 575 ) return;
        return state.avatorDropdownStatus || state.sideMenuOpen;
    }
}

register( createReduxStore( 'global', {
    reducer     : STORE_REDUCER,
    actions     : STORE_ACTIONS,
    selectors   : STORE_SELECTORS,
}))

/**
 * Hooks 
 */ 

const dispatchState = dispatch('global');
addAction('set-page-title', 'global', function( title: string ) {
    document.title = title;
    dispatchState.setPageTitle( title )
})

addAction('authenticate-user', 'global', function() {
    console.log('authenticating...')
    setTimeout(() => {
        dispatchState.setCurrentUser({
            login: true,
            name: 'Ashraf',
            role: ROLES.ADMIN,
            request: 'done',
            image: 'https://i.ibb.co/SsTN7qQ/dummy-profile.png'
        })
    }, 2000)
})