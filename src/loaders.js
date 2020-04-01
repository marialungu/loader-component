import React from 'react';
import cx from 'classnames';
import styles from  './loaders.css';

const Loader = ({ height, width, color}) => {

    let loaderColor = color || '#66064A';
    let loaderHeight = height || '50px';
    let loaderWidth = width || '50px';

    const loaderStyle = {
        width: loaderWidth,
        height: loaderHeight,
        backgroundColor: loaderColor,
    }

    return <div className={cx(styles.loaderPulse)} style={loaderStyle}/>
}

export default Loader;
