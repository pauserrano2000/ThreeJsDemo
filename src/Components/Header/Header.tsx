import "./Header.css";
import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/vidaa_logo.svg";
import { IconSun, IconMoonStars } from "../Icons/Icons";
import { useThemeContext } from "../../Context/theme-context";

export const Header: FC = () => {
  const { theme, switchThemeHandler } = useThemeContext();
  return (
    <header className={`header ${theme}-header`}>
      <Logo className={`logo ${theme}-logo`} />
      <button className="switch" onClick={switchThemeHandler}>
        {theme === "dark" ? (
          <IconSun size={25} color="#ffffff" />
        ) : (
          <IconMoonStars size={25} color="#3c5c9d" />
        )}
      </button>
    </header>
  );
};
