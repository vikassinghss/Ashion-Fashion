import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const  Functions = () => {
  let startTop = useLocation();
  useEffect(() => {
    const goTop = () => {
      window.scrollTo(0, 0);
    };
    goTop();
  }, [startTop]);
};

export default Functions ;