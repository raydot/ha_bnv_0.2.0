import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
	    <nav>
		    <div className='columns'>
			    <div className='clear'></div>
                <div className='leftCol'>
                	<Link to='/' className='logo'><span>{siteTitle}</span></Link>
				</div>
			<div className='rightCol'>
                    
                    	<ul className='header'>
                        
            	            <li><Link className='topMenuClass' to='/explore'>Explore</Link></li>
            	            <li><Link className='topMenuClass' to='/membership'>Membership Benefits</Link></li>
            	            <li><Link className='topMenuClass' to='/join'>Join</Link></li>
            	            <li><Link className='topMenuClass' to='/join'>Sign In</Link></li>
            	            </ul>
                     
                  </div>
                  <div className='clear'>
	              </div>
                  </div>
	    </nav>
		
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
