import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        doAction('set-page-title', '404')
    }, [])

    return (
        <h1>404 page not found</h1>
    )
}