import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const clickCalendarIcon = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        style={{visibility: 'hidden'}}
      />
      <button onClick={clickCalendarIcon}>Open Calendar</button>
    </>
  );
}

export default App;
