import { useState } from "react";
import { DatePicker } from "./DatePicker";
// import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  

  return (
    <>
      <DatePicker state={selectedDate} setState={setSelectedDate} type="date"/>
    </>
  );
}

export default App;
