import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';

interface HomeProps {
    title: string;
    menu?: object
}

const Home: React.FC<HomeProps> = ( props ) => {
    
    useEffect(() => {
        doAction( 'set-page-title' , props.title)
    }, [])

    return (
        <h1>Home page</h1>
    )
}

export default Home;