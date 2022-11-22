function Winefn(props) {
  let { rating, like } = +props;
  rating = Number(rating);
  return (
    <div>
      <h3>{props.rating}</h3>
      <h3>{typeof rating}</h3>
      <h3>{props.like ? "liked" : "none!"}</h3>
    </div>
  );
}
export default Winefn;
