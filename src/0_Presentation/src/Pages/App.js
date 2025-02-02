import {CheckMarginButton} from "../../../1_Application/Processors/src/Components/CheckMarginButton";
import {useState} from "react";
import {ChooseProcessor} from "../Components/ChooseProcessors";


function App() {
    const [processor, setProcessor] = useState("dataprev");
    return (
        <div style={{background: 'black', color: 'white', width: '100vw', height: '100vh'}}>
            Consultar margem: <ChooseProcessor value={processor} onChange={setProcessor}/>
            <CheckMarginButton processorCode={processor}/>
        </div>
    );
}

export default App;
