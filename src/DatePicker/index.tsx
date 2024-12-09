import { useRef, useEffect, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const IconButton = styled.button`
  display: flex;
  aligni-tems: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
`;

const DateWritten = styled.span`
  color: #1f1f1f;
  font-size: 16px;
  align-self: center;
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export function DatePicker({
  state,
  setState,
  type = "date" // must be implemented 
  // DO NOT USE YET
}: {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  type?: "date" | "datetime-local"
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
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
    setState(formatted);
  }, []);

  return (
    <>
      <DateContainer 
        onClick={clickCalendarIcon} 
        style={{ borderColor: isFocused ? '#4C4C4C' : '#d9d9d9' }}
      >
        <DateWritten>{state && formatDate(state)}</DateWritten>
        <HiddenInputDate
          ref={inputRef}
          value={state}
          onChange={handleDateChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
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
