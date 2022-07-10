import Box from "./Box";
function Walls(props) {
  var state;
  props.count === 0 ? (state = true) : (state = false);

  return (
    <>
      {/* <h1>Drag</h1> */}
      <div className="row">
        {props.data.map((item, k) => (
          <Box key={k} data={item} />
        ))}
      </div>
      <div className="footer">
        {" "}
        <button disabled={state} onClick={props.prevSet}>
          Prev
        </button>
        <a href="#navBar" className="topLink">
          Go to top
        </a>
        <button onClick={props.nextSet}>Next</button>
      </div>
    </>
  );
}

export default Walls;
