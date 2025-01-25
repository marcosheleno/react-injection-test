import InitializeProcessors from "./Processors/InitializeProcessors";
import {CheckMarginButton} from "./Processors/Processor";

function App() {
    const agreements = InitializeProcessors();
    const buttonCheckMargin = CheckMarginButton(agreements);
    return (
        <div style={{background: 'black', color: 'white', width: '100vw', height: '100vh'}}>
            É nois
            {buttonCheckMargin}
        </div>
    );
}

export default App;
