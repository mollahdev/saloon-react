import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

export default function Service() {
    useEffect(() => {
        doAction('set-page-title', 'Services')
    }, [])

    return (
        <h1>Service page</h1>
    )
}