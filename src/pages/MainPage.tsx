import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const mainRef = useRef();
  const scrollTimer = useRef<any>();
  const { id: pageId } = useParams();
  const [scrollPosition, setScrollPosition] = useState<number>();
  const scrollHeight = document.body.scrollHeight;

  const handleScroll = () => {
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }
    scrollTimer.current = setTimeout(() => {
      setScrollPosition(window.scrollY);
    }, 500);
  };

  const onScrollHandler = (id) => {
    const viewHeight = window.innerHeight;
    const el = document.getElementById(`${id}`);
    if (el != null && el.scrollHeight <= viewHeight) {
      el.scrollIntoView();
    }
    console.log(viewHeight, el.scrollHeight);
  };

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
    if (mainRef.current) {
      //@ts-ignore
      const pages = mainRef.current.children;
      const pageHeight = scrollHeight / pages.length;

      let index = 0;
      for (let i = 0; i < pages.length; i++) {
        const topLine = pageHeight * i;
        const bottomLine = pageHeight * (i + 1);
        if (topLine <= scrollPosition && scrollPosition < bottomLine) {
          index = i;
          break;
        }
      }

      const calcDownPosition = index * pageHeight + pageHeight * 0.5;
      const nextPage = pages[index]?.nextElementSibling?.id;
      const currentPage = pages[index].id;

      let targetPage;
      if (nextPage && calcDownPosition < scrollPosition) {
        targetPage = nextPage;
      } else {
        targetPage = currentPage;
      }
      navigate(`/${targetPage === "first" ? "" : targetPage}`);
      onScrollHandler(targetPage);
    }
  }, [scrollPosition, scrollHeight]);

  return (
    <div ref={mainRef}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};

export default MainPage;
