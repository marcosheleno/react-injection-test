import {InitializeZetra} from "./Zetra/InitializeZetra";
import {useDispatch} from 'react-redux';
import {registerProcessor} from "./ProcessorReducer";
import {InitializeDataprev} from "./Dataprev/InitializeDataprev";


const InitializeProcessors = () => {
    const dispatch = useDispatch();
    dispatch(registerProcessor(InitializeZetra()));
    dispatch(registerProcessor(InitializeDataprev()));
};

export default InitializeProcessors;