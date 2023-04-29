import { Mods, classNames } from 'shared/lib/classNames/classNames'

import cls from './Component.module.scss'
import { useTheme } from 'providers/ThemeProvider'
import { useState } from 'react'

interface ComponentProps {
    className?: string
}


export const Component = ({ className }: ComponentProps) => {
    const { theme } = useTheme()
    const [isHovered, setHovered] = useState(false)
    const mods: Mods = {
        [cls['isHovered']]: isHovered,
    }
    return (
        <div
            className={classNames(cls.Component, mods, [className, cls[theme]])}
            onMouseMove={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            component
        </div>
    )
}