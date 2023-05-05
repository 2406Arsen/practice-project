import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
    children: React.ReactNode,
}

const ErrorMessage = (props: ErrorMessageProps) => {

    const {
        children
    } = props

    return(
        <label className={styles.LightError}>{children}</label>
    )
}

export default ErrorMessage;