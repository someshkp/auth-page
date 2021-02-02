import React from 'react';

import './dialog-box.style.scss';

const DialogBox = ({children, ...otherProps}) => (
    <div className="dialog-box-bg" {...otherProps}>
        <div className="dialog-box-card">
            {children}
        </div>
    </div>
);

export default DialogBox;