export default function Box(props) {
  return (
    <div className="col-2">
      <div className="img">
        <img alt="pic you cant see" src={props.data.img} />
      </div>

      <div className="metaData">
        <h4>from :: {props.data.subreddit}</h4>
        <h4>by :: {props.data.author}</h4>
        <h4>
          Url/Download Link ::{" "}
          <a
            style={{ color: "#ff6060" }}
            rel="noreferrer"
            href={props.data.url}
            target="_blank"
          >
            click here
          </a>
        </h4>
      </div>
    </div>
  );
}
