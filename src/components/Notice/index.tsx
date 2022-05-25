import React from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState} from "recoil";
import {startDateState} from "../../atoms/Calendar";


const Notice:React.FC = () => {
  //const [startDate, setStartDate] = useRecoilState(startDateState);
  const startDate = useRecoilValue(startDateState);
  const setStartDate = useSetRecoilState(startDateState);
  const resetStartDate = useResetRecoilState(startDateState);

  const handleChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleClick = () => {
    resetStartDate();
  };

  return (
    <>
      {startDate}
      <input type="text" value={startDate} onChange={handleChange} />
      <button type="button" onClick={handleClick}>Reset</button>
    </>
  );
};

export default Notice;

