import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme, key) => ({
  tableHead: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
  },
  tableCell: {
    fontWeight: "bolder",
    color: "black",
    padding: "6px 5px",
    fontSize: "0.72rem",
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
}));
