import React, { useEffect } from 'react'
import ReactGa from 'react-ga';

function GoogleAnalytics() {

    useEffect(() => {
        ReactGa.initialize('G-JL5SHBX2BM');
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default GoogleAnalytics
