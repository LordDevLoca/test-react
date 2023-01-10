function getDate(props) {
  const dateItaly = props.data.toLocaleString("it-IT");

  return (
    <div>
      <div>{dateItaly}</div>
    </div>
  );
}

export default getDate;
