import {ProcessorFunctionsContracts} from "./ProcessorFunctionsContracts";
import {JSX} from "react";

export const CheckMarginButton = (processorFunctions: ProcessorFunctionsContracts[]):JSX.Element => {
    return (<label>
        {processorFunctions.map(processor => processor.BtnCheckMargin)}
    </label>);
}
