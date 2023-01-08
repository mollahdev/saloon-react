import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

interface ServiceProps {
    title: string;
    menu?: object
}

const Service: React.FC<ServiceProps> = ( props ) => {
    useEffect(() => {
        doAction('set-page-title', props.title)
    }, [])

    return (
        <h1>Service page</h1>
    )
}

export default Service