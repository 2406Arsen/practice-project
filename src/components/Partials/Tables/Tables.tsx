import styles from "./Tables.module.scss";

interface TablesProps {
    children: React.ReactNode,
}

const Tables = (props: TablesProps) => {

    const {
        children
    } = props

    return(
        <>
        <table className={styles.LightTable}>{children}</table>
        </>
    )
}

export default Tables;