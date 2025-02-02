import {JSX} from "react";
import {ZetraCheckMarginButton} from "../../../../2_Domain/Dataprev/src/Components/ZetraCheckMarginButton";

export const CheckMarginButton = ({processorCode}: { processorCode: string }): JSX.Element => {
    switch (processorCode) {
        case "zetra":
            return <ZetraCheckMarginButton/>
        case "dataprev":
            return <ZetraCheckMarginButton/>;
        default:
            return <></>
    }
}