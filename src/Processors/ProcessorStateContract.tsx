import {ProcessorFunctionsContract} from "./ProcessorFunctionsContract";

export interface ProcessorStateContract {
    code: string | null,
    processors: ProcessorFunctionsContract[]
}