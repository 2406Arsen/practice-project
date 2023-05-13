
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TableSmallButton.module.scss'
import { useTheme } from 'providers/ThemeProvider';
import React, { Component, memo, useMemo } from 'react';



interface TableSmallButtonProps{
        
}


const TableSmallButton:React.FC<TableSmallButtonProps > = memo((props) => {
    const{

    } = props;
     
    const { theme }=useTheme()
    const mods = useMemo(() => ({}),[])

    return(
        <button
            className={classNames(cls.TableSmallButton, mods, [
                cls[theme],
            ])}
            onClick={()=>{}}
        >
            Small
        </button>
    )
});

export default TableSmallButton;