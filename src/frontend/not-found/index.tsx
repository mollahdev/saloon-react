import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

interface NotFoundProps {
    title: string;
    menu?: object
}

const NotFound: React.FC<NotFoundProps> = ( props ) => {
    useEffect(() => {
        doAction( 'set-page-title' , props.title)
    }, [])

    return (
        <h1>404 page not found</h1>
    )
}

export default NotFound;