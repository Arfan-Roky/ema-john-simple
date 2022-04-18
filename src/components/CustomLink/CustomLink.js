import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({to, children, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path : resolved.pathname, end: true})

    return (
        <>
            <Link style={{color : match ? 'crimson' : 'white' }} to={to} {...props}>{children}</Link>
        </>
    );
};

export default CustomLink;