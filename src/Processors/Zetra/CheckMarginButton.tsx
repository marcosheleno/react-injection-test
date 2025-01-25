import {JSX} from "react";
import {ProcessorStateContract} from "../ProcessorStateContract";

export const CheckMarginButton = (Agreement: ProcessorStateContract): JSX.Element => {
    if (Agreement.code !== 'zetra')
        return null;

    return (<button>Checar Margem Zetra</button>);
}