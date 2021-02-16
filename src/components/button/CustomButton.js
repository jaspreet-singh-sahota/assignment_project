import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { filterVendorInfo } from "../../redux/action/FilterVenderInfoAction";

const CustomButton = ({ styles, text }) => {
  const [, setSelectedButton] = useState("");
  const dispatch = useDispatch();
  
  const handlerOnClick = (e) => {
    const str = e.target.innerText.split(" ");
    str.shift();
    setSelectedButton(str.join(" "));
    dispatch(filterVendorInfo({ Status: str.join(' ') }));
  };

  return (
    <Button
      onClick={handlerOnClick}
      style={{ borderRadius: "15px", ...styles }}
      size={"small"}
      variant="outlined"
      color="primary"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
