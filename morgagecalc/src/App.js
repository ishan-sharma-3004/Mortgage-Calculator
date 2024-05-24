import React, {UseState} from "react";
import Navbar from "./Components/Common/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import Grid from "@mui/material/Grid";
import TenureSelect from "./Components/TenureSelect";

function App() {
  const [data, setData]=useState({
    homeValue: 3000,
    downPayment: 3000*0.2,
    loanAmount: 3000*0.8,
    loanTerm: 5,
    interestRate: 5,
  })
  return (
    <div className="App">
      <Navbar />
      <Grid maxWidth="xl" sx={{marginTop: 4}}>
        <Grid item xs={12} md={6}>
          <SliderSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <SliderSelect data={data} setData={setData}/>
          <TenureSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <Result />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
