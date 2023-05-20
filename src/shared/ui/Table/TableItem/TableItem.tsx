import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'providers/ThemeProvider'
import { useMemo, memo } from 'react'
import cls from './TableItem.module.scss'
import RadioButton from 'shared/ui/RadioButton/RadioButton'
import Switch from 'shared/ui/Switch/Switch'

export interface TableProps {
    isCaption?: boolean,
    leftPart?: string,
    icon?: any,
    rightPart?: string | any,
    rightPartType?: 'button' | 'switch'
}


const Table: React.FC<TableProps> = memo((props) => {
    const {
        isCaption,
        leftPart,
        rightPart,
        icon,
        rightPartType
    } = props;

    const { theme } = useTheme()
    const mods = useMemo(() => ({}), [])


    return (
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
                        alt='alt'
                    />
                    : <span className={cls.MapIcon}>{icon}</span>
                }
                <div className={cls.LeftPartText}>
                    <p>Content is here</p>
                    {isCaption
                        ? <span className={classNames(cls.Caption, mods, [
                            cls[theme],
                        ])}
                        >For coption</span>
                        : null
                    }
                </div>
            </div>
            {rightPart}
            {rightPartType === 'button' && <RadioButton />}
            {rightPartType === 'switch' && <Switch />}
        </div>
    )
});

export default Table;