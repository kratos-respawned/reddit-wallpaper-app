import { useEffect, useState } from "react";
import useSpinHook from "./SpinHook";
import Walls from "./Walls";
function Fetch(props) {
  const [Maindata, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loader, showLoader, hideLoader] = useSpinHook();
  const [url, setUrl] = useState(
    `https://www.reddit.com/r/${props.data}/hot.json?count=1000&raw_json=1`
  );
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetchData();
    console.log("reload");
  }, [url]);
  let next = () => {
    setUrl(
      `https://www.reddit.com/r/${props.data}/hot.json?count=1000&after=${response.data.after}&raw_json=1`
    );
    window.scrollTo(0, 0);
    setCounter(counter + 1);
  };
  let before = () => {
    window.scrollTo(0, 0);
    setUrl(
      `https://www.reddit.com/r/${props.data}/hot.json?count=1000&before=${response.data.before}&raw_json=1`
    );
    setCounter(counter - 1);
  };
  let fetchData = () => {
    showLoader();
    fetch(url).then((result) => {
      result.json().then((resp) => {
        handleData(resp);
        setResponse(resp);
        hideLoader();
      });
    });
  };
  let handleData = (resp) => {
    let main = resp.data.children;
    let data = [];
    let i = 0;

    main.slice(0, 1000).map((item) => {
      try {
        console.log(item);
        if (!item.data.is_video && !item.data.over_18) {
          let temp = {
            title: item.data.title,
            author: item.data.author,
            subreddit: item.data.subreddit,
            url: item.data.url,
            img: item.data.preview.images[0].resolutions[3].url,
          };

          data[i] = temp;
          i = i + 1;
        }
      } catch (err) {}
    });
    setData(data);
  };

  return (
    <div className="walls">
      <Walls data={Maindata} count={counter} nextSet={next} prevSet={before} />
      {loader}
    </div>
  );
}

export default Fetch;
