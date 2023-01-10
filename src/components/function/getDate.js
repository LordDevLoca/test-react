function getDate(props) {
  const year = props.data.toLocaleString("it-IT", {
    year: "numeric",
  });
  const month = props.data.toLocaleString("it-IT", {
    month: "long",
  });
  const day = props.data.toLocaleString("it-IT", {
    day: "2-digit",
  });

  return (
    <div className="d-flex">
      <div style={{ textTransform: "capitalize" }}>{month}</div>
      <div style={{ fontWeight: "300", fontSize: "14px" }}>{year}</div>
      <div style={{ fontWeight: "600", fontSize: "34px" }}>{day}</div>
    </div>
  );
}

export default getDate;
