import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'providers/ThemeProvider'
import { useMemo,memo } from 'react'
import cls from './Table.module.scss'


interface TableProps{
    isCaption?: boolean,
    leftPart?: string,
    rightPart?: string | any,
}


const Table:React.FC<TableProps> = memo((props) => {
    const{
        isCaption,
        leftPart,
        rightPart,
    } = props;
    
    const { theme }=useTheme()
    const mods = useMemo(() => ({}),[])


    return(
        <div
            className={classNames(cls.Table, mods, [
                cls[theme],
            ])}
            >
            <div className={cls.LeftPart}>
                {leftPart
                    ? <img 
                        src={leftPart}
                        className={classNames(cls.TableImg, mods, [])}
                      /> 
                    : null
                }
                <div className={cls.LeftPartText}>
                    <p>Content is here</p>
                    { isCaption 
                        ? <span className={classNames(cls.Caption, mods, [
                                    cls[theme],
                                ])}
                        >For coption</span>
                        : null
                    }
                </div>
            </div>
            {rightPart}
        </div>
    )
});

export default Table;