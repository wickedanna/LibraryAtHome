import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './SecondaryNav.scss';

class SecondaryNav extends React.Component {
    render() {
        return(
            <Nav className="SecondaryNav">
                <NavItem>
                    <NavLink tag={RRNavLink} to="/add-borrower">Add A Borrower</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/">Create A Loan</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/">Due Soon</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/">See All Loans</NavLink>
                </NavItem>
            </Nav>
        )
    }
}

export default SecondaryNav;