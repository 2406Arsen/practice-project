import styles from './Caption.module.scss';

interface CaptionProps {
    children: React.ReactNode,
}

const Caption = (props: CaptionProps) => {

    const {
        children
    } = props

    return(
        <label className={styles.LightCaption}>{children}</label>
    )
}

export default Caption;