import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({children, isSignInWithGoogle, ...otherProps}){
        return(
                <button className= {`${isSignInWithGoogle? 'google-sign-in' : ''} custom-button`} {...otherProps}>
                        {children}
                </button>
        );
}