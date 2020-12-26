import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="http://gatsby-dimension.surge.sh">Gatsby.js</a>
        <br/>
        Get your own version of this webpage <a href="https://github.com/agarwalr98/RohitAgarwal-personal-homepage"> here </a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
