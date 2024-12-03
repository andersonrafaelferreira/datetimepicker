import { useState, useRef, useEffect } from "react";
// import "./App.css";

import styled from "styled-components";

const IconButton = styled.button`
  display: flex;
  alignitems: center;
  justifycontent: center;
  backgroundcolor: transparent;
  padding: 0;
  border: none;
`;

const DateWritten = styled.span`
  color: 1f1f1f;
  fontsize: 16px;
`;

const HiddenInputDate = styled.input`
  opacity: 0;
  height: 24px;
  display: flex;
  flex: 1;
  border: 0;
`;

const DateContainer = styled.div`
  max-width: 100%;
  padding: 16px;
  border-radius: 0.5rem;
  border: 1px solid #d9d9d9;
  height: 24px;

  display: flex;
  justifyContent: space-between;
  alignItems: center;
  flex-direction: row

`;

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

  function formatDate(date: string): string {
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formatted = `${year}-${month}-${day}`;
    setSelectedDate(formatted);
  }, []);

  return (
    <>
      <DateContainer onClick={clickCalendarIcon}>
        <DateWritten>{selectedDate && formatDate(selectedDate)}</DateWritten>
        <HiddenInputDate
          ref={inputRef}
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <IconButton>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"
            width={20}
            height={20}
          />
        </IconButton>
      </DateContainer>
    </>
  );
}

export default App;
