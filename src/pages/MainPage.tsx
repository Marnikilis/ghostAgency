import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useDebounce from "../components/hooks/useDebounce";

const MainPage = () => {
  const pageId = useParams().id;
  const scrollPosition = useRef<number>();
  const debouncedScroll = useDebounce(scrollPosition.current, 500);

  const scrollHeight = window.innerHeight;

  const handleScroll = () => {
    scrollPosition.current = window.scrollY;
  };

  const onScrollHandler = (id) => {
    const el = document.getElementById(`${id}`);
    if (el != null) {
      el.scrollIntoView();
    }
  };

  useEffect(() => {
    console.log("scrollPos", scrollPosition.current);
  }, [scrollPosition.current]);

  useEffect(() => {
    const page = pageId || "first";
    onScrollHandler(page);
  }, [pageId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log("scroll", debouncedScroll);

    if (debouncedScroll === 0) {
      onScrollHandler("first");
    } else if (scrollHeight > debouncedScroll) {
      onScrollHandler("trackrecord");
    } else if (debouncedScroll > scrollHeight * 1.5) {
      onScrollHandler("support");
    }
  }, [debouncedScroll]);

  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </>
  );
};

export default MainPage;
