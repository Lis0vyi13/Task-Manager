import { useSelector } from "react-redux";

const useSelectField = () => {
  const { theme } = useSelector((state) => state.page);
  const isDark = theme === "dark";

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#111" : "#fff",
      color: isDark ? "#fff" : "#000",
      border: isDark ? "none" : "1px solid #d8d8d8",
    }),

    option: (styles, { isFocused }) => ({
      ...styles,
      background: isFocused ? (isDark ? "#2744e5" : "#66b2ff") : undefined,
      zIndex: 1,
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#333" : "#fff",
      color: isDark ? "#fff" : "#000",
      border: "1px solid #484848",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: isDark ? "#fff" : "#000",
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#2744e5" : "#e0e0e0",
    }),

    multiValueLabel: (provided) => ({
      ...provided,
      color: isDark ? "#fff" : "#000",
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      color: isDark ? "#fff" : "#000",
      ":hover": {
        backgroundColor: isDark ? "#f00" : "#ff0000",
        color: "white",
      },
    }),
  };
  return { customStyles };
};

export default useSelectField;
