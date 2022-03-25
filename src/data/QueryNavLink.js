import React from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const QueryNavLink = ({to, ...props }) => {
    
let location = useLocation();
const [search, setsearch] = useSearchParams()
if (!search.get('search')) return <NavLink to={to} {...props}/>
return <NavLink to={to + location.search} {...props}/>

};

export default QueryNavLink;
