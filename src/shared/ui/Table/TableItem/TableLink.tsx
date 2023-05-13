import { Link } from 'react-router-dom'
import cls from './TableLink.module.scss'

interface LinkProps {
    to: string;
    children?: React.ReactNode
}


export const TableLink = ({  children, to}: LinkProps) => {
    return (
        <span>
            <Link to={to} className={cls.TableLink}>Link{children}</Link>
        </span>
    )
}