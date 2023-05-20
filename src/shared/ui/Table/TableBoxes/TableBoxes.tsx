import { useTheme } from 'providers/ThemeProvider'
import { useMemo, memo, Component } from 'react'
import cls from './TableBoxes.module.scss'
import Table from '../TableItem/TableItem';
import RadioButton from '../../RadioButton/RadioButton';
import { TableLink } from '../TableItem/TableLink';
import TableSmallButton from '../TableItem/TableSmallButton';
import Switch from '../../Switch/Switch';
import { ReactComponent as MapIcon } from "../../../assets/icons/map-pin.svg";
import { classNames } from 'shared/lib/classNames/classNames';


export enum TableType {
    FIRST_BOX,
    SECOND_BOX,
    THIRD_BOX,
    FOURTH_BOX,
    FIFTH_BOX,
    SIXTH_BOX,
}

export interface TablesProps {
    type?: TableType
    link: string,
    leftPart?: string | any
}


const TableBoxes: React.FC<TablesProps> = memo((props) => {
    const {
        type,
        link,
        leftPart
    } = props;

    const { theme } = useTheme()
    const mods = useMemo(() => ({}), [])

    const getTableVew = () => {
        switch (type) {
            case TableType.FIRST_BOX:
                return <>
                    <Table />
                    <Table rightPart={<TableLink to={link} />} />
                    <Table rightPart={<RadioButton />} />
                    <Table rightPart={<TableSmallButton />} />
                    <Table rightPart={<Switch />} />
                    <br />
                </>
            case TableType.SECOND_BOX:
                return <>
                    <Table isCaption />
                    <Table isCaption rightPart={<TableLink to={link} />} />
                    <Table isCaption rightPart={<RadioButton />} />
                    <Table isCaption rightPart={<TableSmallButton />} />
                    <Table isCaption rightPart={<Switch />} rightPartType='button' />
                    <br />
                </>
            case TableType.THIRD_BOX:
                return <>
                    <Table
                        leftPart={leftPart} />
                    <Table
                        leftPart={leftPart}
                        rightPart={<TableLink to={link} />} />
                    <Table
                        leftPart={leftPart}
                        rightPart={<RadioButton />} />
                    <Table
                        leftPart={leftPart}
                        rightPart={<TableSmallButton />} />
                    <br />
                </>

            default:
                break;
        }
    }

    return (
        <div
            className={classNames(cls.TableBackground, mods, [
                cls[theme],
            ])}>
                {getTableVew()}
            {/* {
                type === TableType.FIRST_BOX
                    ? <>
                        <Table />
                        <Table rightPart={<TableLink to={link} />} />
                        <Table rightPart={<RadioButton />} />
                        <Table rightPart={<TableSmallButton />} />
                        <Table rightPart={<Switch />} />
                        <br />
                    </>
                    : type === TableType.SECOND_BOX
                        ? <>
                            <Table isCaption />
                            <Table isCaption rightPart={<TableLink to={link} />} />
                            <Table isCaption rightPart={<RadioButton />} />
                            <Table isCaption rightPart={<TableSmallButton />} />
                            <Table isCaption rightPart={<Switch />} />
                            <br />
                        </>
                        : type === TableType.THIRD_BOX
                            ? <>
                                <Table
                                    leftPart={leftPart} />
                                <Table
                                    leftPart={leftPart}
                                    rightPart={<TableLink to={link} />} />
                                <Table
                                    leftPart={leftPart}
                                    rightPart={<RadioButton />} />
                                <Table
                                    leftPart={leftPart}
                                    rightPart={<TableSmallButton />} />
                                <br />
                            </>
                            : type === TableType.FOURTH_BOX
                                ? <>
                                    <Table
                                        isCaption
                                        leftPart={leftPart} />
                                    <Table
                                        isCaption
                                        leftPart={leftPart}
                                        rightPart={<TableLink to={link} />} />
                                    <Table
                                        isCaption
                                        leftPart={leftPart}
                                        rightPart={<RadioButton />} />
                                    <Table
                                        isCaption
                                        leftPart={leftPart}
                                        rightPart={<TableSmallButton />} />
                                    <br />
                                </>
                                : type === TableType.FIFTH_BOX
                                    ? <>
                                        <Table
                                            icon={<MapIcon />} />
                                        <Table
                                            icon={<MapIcon />}
                                            rightPart={<TableLink to={link} />} />
                                        <Table
                                            icon={<MapIcon />}
                                            rightPart={<RadioButton />} />
                                        <Table
                                            icon={<MapIcon />}
                                            rightPart={<TableSmallButton />} />
                                        <Table
                                            icon={<MapIcon />}
                                            rightPart={<Switch />} />
                                        <br />
                                    </>
                                    : type === TableType.SIXTH_BOX
                                        ? <>
                                            <Table
                                                isCaption
                                                icon={<MapIcon />} />
                                            <Table
                                                isCaption
                                                icon={<MapIcon />}
                                                rightPart={<TableLink to={link} />} />
                                            <Table
                                                isCaption
                                                icon={<MapIcon />}
                                                rightPart={<RadioButton />} />
                                            <Table
                                                isCaption
                                                icon={<MapIcon />}
                                                rightPart={<TableSmallButton />} />
                                            <Table
                                                isCaption
                                                icon={<MapIcon />}
                                                rightPart={<Switch checked />} />
                                            <br />
                                        </>
                                        : undefined
            } */}
        </div>
    )
});

export default TableBoxes;

