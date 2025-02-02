import {ProcessorFunctionsContract} from "./ProcessorFunctionsContract";
import {useSelector} from "react-redux";
import {RootState} from "../SharedKernel/Reducers";
import React, {Suspense} from "react";


export const CheckMarginButton = (processorFunctions: ProcessorFunctionsContract[]): React.JSX.Element => {
    const d = './Dataprev';
    const context = require.context(d, true, /CheckMarginButton\.tsx$/);
    const keys = context.keys();
    const component = context(keys[0]); // Escolha o módulo necessário
    console.log(component);


    console.log(context(keys[0]).default);
    // const {code, processors} = useSelector((state: RootState) => state);
    // console.log(processors);
    // console.log(code);
    //
    // let component = <></>;
    // processors.map((processor) => {
    //     if (processor.Code === code) {
    //         const a = './Dataprev'
    //         const modules = require.context(a, true, /\.jsx?$/);
    //
    //
    //         component = (
    //             <Suspense fallback={<div>Loading...</div>}>
    //                 {/*<CheckMarginButton />*/}
    //             </Suspense>
    //         )
    //     }
    // });

    return <></>;
}
