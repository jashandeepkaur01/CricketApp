import { getData } from "Redux/Actions/playerActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../../Components/Atoms/Carousel";
import "./style.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, []);
  return <Carousel />;
}

export default Home;
