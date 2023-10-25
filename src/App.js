import { Button } from "@mui/material";
import Index from "./app/routes/index";
import axios from "axios";
import AdEditSup from "./app/pages/admin/AdEditSup";
import AdEditSup1 from "./app/pages/admin/AdEditSup1";


function App() {
   

    return (<>
        {/* <Index/> */}
        {/* <Button title="Fetch data" onClick={fetchdata}/> */}
        <AdEditSup1/>

    </>);
}

export default App;
