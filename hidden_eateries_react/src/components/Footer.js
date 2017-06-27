import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer (props){
    return(

        <div className="footer">
            <SocialIcon className="icons"
                url="http://twitter.com"
                style={{ height: 25, width: 25 }}

            />
            <SocialIcon className="icons"
                url='http://facebook.com'
                style={{ height: 25, width: 25}}
            />
            <SocialIcon className="icons"
                url='http://www.pinterest.com'
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon className="icons"
                url='http://instagram.com'
                style={{
                        height: 25,
                        width: 25
                }}
            />
        </div>
    )
}

export default Footer;