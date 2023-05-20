
export const getStyleFromPosition = (position: "top" | "right" | "bottom" | "left") => {
  switch (position) {
    case "top":
      return {
        bottom: "calc(100% + 2px)",
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "right":
      return {
        left: "calc(55% + 2px)",
        top: "50%",
        transform: "translateY(-50%)",
      };
    case "bottom":
      return {
        top: "calc(100% + 2px)",
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "left":
      return {
        right: "calc(55% + 2px)",
        top: "50%",
        transform: "translateY(-50%)",
      };
    default:
      return {};
  }
}
