import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Feature(props) {
  const { title, money, rate, arrow, detailes } = props;

  return (
    <div className="layoutCard">
      <span className="homeTitle">{title}</span>
      <div className="featureprice">
        <span className="featureMoney">${money}</span>
        <span className="featureRate">
          {rate}{" "}
          {arrow === "down" ? (
            <ArrowDownwardIcon className="arrowDown" />
          ) : (
            <ArrowUpwardIcon className="arrowUp" />
          )}
        </span>
      </div>
      <span className="featureDetail">{detailes}</span>
    </div>
  );
}

export default Feature;
