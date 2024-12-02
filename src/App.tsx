import { useState, useRef, useEffect } from "react";
import "./App.css";

import styled from "styled-components";

const DateContainer = styled.div`
  max-width: 100%;
  padding: 16px;
  border-radius: 0.5rem;
  border: 1px solid #d9d9d9;
  height: 24px;
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
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    const dataFormatada = `${ano}-${mes}-${dia}`;
    setSelectedDate(dataFormatada);
  }, []);

  return (
    <>
      <DateContainer onClick={clickCalendarIcon}>
        <div
          style={{
            flexDirection: "row",
            gap: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <input type="date" value={selectedDate} disabled 
          style={{
            height: '24px', border: 0,
            background: 'transparent', display: 'flex', flex: 1, fontSize: '20px', textAlign: 'left'
          }} /> */}
          <span>
            {selectedDate && formatDate(selectedDate)}
          </span>
          <input
            ref={inputRef}
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            style={{
              opacity: 0,
              height: "24px",
              display: "flex",
              flex: 1,
              border: 0,
            }}
          />
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"
              width={16}
              height={16}
            />
          </button>
        </div>
      </DateContainer>
      <p>{selectedDate && formatDate(selectedDate)}</p>
    </>
  );
}

export default App;
