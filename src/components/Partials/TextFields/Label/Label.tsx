import { useState } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
    children: React.ReactNode,
}

const Label = (props: LabelProps) => {

    const {
        children,
    } = props

    return(
        <>
        <label className={styles.LightLabel}>{children}</label>
        </>
    )
}

export default Label;