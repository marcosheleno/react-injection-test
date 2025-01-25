import React, {JSX, useState} from "react";
import {ProcessorStateContract} from "./ProcessorStateContract";
import {InitializeDataprev} from "./Dataprev/InitializeDataprev";
import {InitializeZetra} from "./Zetra/InitializeZetra";
import {ProcessorFunctionsContracts} from "./ProcessorFunctionsContracts";


const InitializeProcessors = (): ProcessorFunctionsContracts[] => {
    const[processorState] = useState<ProcessorStateContract>({
        code: 'dataprev'
    })

    let processors: ProcessorFunctionsContracts[] = [];
    processors.push(InitializeDataprev(processorState));
    processors.push(InitializeZetra(processorState));

    return processors;
};

export default InitializeProcessors;