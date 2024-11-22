import { useState, useRef } from "react";
import "./App.css";

import styled from 'styled-components'

const DateContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: .5rem;
  border: 1px solid #d9d9d9;
  height: 24px;
`

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
    <DateContainer>
      <input
        ref={inputRef}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        style={{opacity: 0}}
      />
      <button onClick={clickCalendarIcon}>Open Calendar</button>

      <input type="text" value={selectedDate} />
    </DateContainer>
  );
}

export default App;
