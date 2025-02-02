import InitializeProcessors from "./Processors/InitializeProcessors";
import {CheckMarginButton} from "./Processors/Processor";


function App() {
    InitializeProcessors();

    return (
        <div style={{background: 'black', color: 'white', width: '100vw', height: '100vh'}}>
            É nois
            {<CheckMarginButton />}
        </div>
    );
}

export default App;
