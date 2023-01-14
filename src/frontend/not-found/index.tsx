import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

const NotFound: React.FC = () => {
    useEffect(() => {
        doAction( 'set-page-title', '404')
    }, [])

    return (
        <h1>404 page not found</h1>
    )
}

export default NotFound;