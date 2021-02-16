import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";

const CheckboxComponent = ({ status }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    status ? setIsChecked(true) : setIsChecked(false);
  }, [status]);

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleOnClick}
      size="small"
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default CheckboxComponent;
