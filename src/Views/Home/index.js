import Carousel from "Components/Atoms/Carousel";
import { getMatchData } from "Redux/Actions/matchActions";
import { getData } from "Redux/Actions/playerActions";
import AllMatches from "Views/AllMatches";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./style.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
    dispatch(getMatchData());
  }, []);
  return (
    <>
      <Carousel />
      <AllMatches />
    </>
  )
}

export default Home;
