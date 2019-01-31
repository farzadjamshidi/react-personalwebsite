import React, { Component } from 'react';
import getNavLinks from './../services/navLinks';
import UserInfo from './common/userInfo';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    
    render() { 
        const navLinks = getNavLinks ();
        return ( 

            < nav className="col-md-2 d-done d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                <UserInfo ImgUrl="https://via.placeholder.com/200x200"
                fullname="فرزاد جمشیدی"
                text="برنامه نویس و ترینر" 
                />
                    <hr className="shadow" />

                    <ul className="nav flex-column">
                        {navLinks.map(nav => (
                            <li className="nav-item" key={nav.id}>
                                <Link className="nav-link" to={nav.link}>
                                    <span className={nav.icon} />
                                    <span className="m-2">{nav.text}</span>
                                    {nav.count ? (
                                        <span className="badge-danger badge-pill">{nav.count}</span>
                                    ) : null}
                                </Link>
                            </li>

                        ))}
                    </ul>
                </div>
            
            </nav>

         );
    }
}
 
export default Sidebar;