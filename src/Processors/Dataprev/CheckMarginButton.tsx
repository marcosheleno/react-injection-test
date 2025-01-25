import {JSX} from "react";
import {ProcessorStateContract} from "../ProcessorStateContract";

export const CheckMarginButton = (Agreement: ProcessorStateContract): JSX.Element => {
    if (Agreement.code !== 'dataprev')
        return null;

    return (<button>Checar Margem Dataprev</button>)
}