import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ToTop = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });
  const getVisible = () =>
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(() => getVisible());
    const onScroll = () => setIsVisible(() => getVisible());
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <IconButton
      aria-label="Back to top"
      title="Back to top"
      icon={<FiArrowUp />}
      rounded="full"
      pos="fixed"
      bottom="25"
      right="4"
      colorScheme="gray"
      onClick={scrollToTop}
      visibility={isVisible ? "visible" : "hidden"}
    />
  );
};

export default ToTop;