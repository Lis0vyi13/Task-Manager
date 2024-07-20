import { useMediaQuery } from "react-responsive";

const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: "(max-width:899px)" });
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });

  return { isMobile, isDesktop };
};

export default useBreakpoints;
