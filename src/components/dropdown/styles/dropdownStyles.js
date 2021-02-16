import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 80,
    padding: " 0 3px 7px  3px",
  },
  inputLabel: {
    padding: "0px",
    top: "-11px",
    left: "13px",
    fontSize: "0.8rem",
  },
  select: {
    margin: "3px 0 0 10px !important",
    fontSize: "0.7rem",
  },
  menuItems: { fontSize: "0.8rem" }
}));
