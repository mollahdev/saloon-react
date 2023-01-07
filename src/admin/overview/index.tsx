import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

export default function Overview() {
    useEffect(() => {
        doAction('set-page-title', 'Overview')
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