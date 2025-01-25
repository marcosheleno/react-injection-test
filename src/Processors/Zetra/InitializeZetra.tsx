import {ProcessorFunctionsContracts} from "../ProcessorFunctionsContracts";
import {CheckMarginButton} from "./CheckMarginButton";
import {ProcessorStateContract} from "../ProcessorStateContract";

export const InitializeZetra = (Agreement: ProcessorStateContract): ProcessorFunctionsContracts => {
    return {
        BtnCheckMargin: CheckMarginButton(Agreement)
    }
}