import { Button } from "@mui/material";
import Index from "./app/routes/index";
import axios from "axios";
import AdUserDetail from "./app/pages/admin/AdUserDetail";

function App() {
   

    return (<>
        {/* <Index/> */}
        {/* <Button title="Fetch data" onClick={fetchdata}/> */}
        <AdUserDetail/>

    </>);
}

export default App;
