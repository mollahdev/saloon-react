import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

interface OverviewProps {
    title: string;
    menu?: object
}
const Overview: React.FC<OverviewProps> = ( props ) => {
    useEffect(() => {
        doAction('set-page-title', props.title)
    }, [])

    return (
        <div>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
            <h1>Overview Page</h1>
        </div>
    )
}

export default Overview;