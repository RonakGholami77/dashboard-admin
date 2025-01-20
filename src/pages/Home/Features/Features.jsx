import Feature from "./Feature";

function Features() {
  const featuresData = [
    {
      title: "Revanue",
      money: "2,415",
      rate: "-11.04",
      arrow: "down",
      detailes: "Compared to last month",
    },
    {
      title: "Sales",
      money: "4,415",
      rate: "-1.04",
      arrow: "down",
      detailes: "Compared to last month",
    },
    {
      title: "Cost",
      money: "2,225",
      rate: "+2.4",
      arrow: "up",
      detailes: "Compared to last month",
    },
  ];

  return (
    <div className="homeLayout">
      {featuresData.map((feature) => {
        return <Feature {...feature} />;
      })}
    </div>
  );
}

export default Features;
