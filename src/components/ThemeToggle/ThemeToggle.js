import { useContext, useEffect } from "react";
import './ThemeToggle.css';
import{ReactComponent as SunIcon} from '../../assets/sun.svg'
import {ReactComponent as MoonIcon} from '../../assets/moon.svg'
import { ProcrastinationContext } from "../context/procrastinationContext";

export default function ThemeToggle() {
  const {isEnabled, setIsEnabled} = useContext(ProcrastinationContext);

    useEffect(() => {
        updateTheme(isEnabled)
    }, [isEnabled]);

    const updateTheme = (isDarkEnabled) => {
        const styles = getComputedStyle(document.body);
	    const gray = styles.getPropertyValue("--gray");
        const white = styles.getPropertyValue("--white");
        const docEl = document.documentElement;

        if (isDarkEnabled) {
            docEl.style.setProperty("--background", gray);
            docEl.style.setProperty("--foreground", white);
        } else {
            docEl.style.setProperty("--background", white);
            docEl.style.setProperty("--foreground", gray);
        }
    };


    const toggleState = () => {
        setIsEnabled((prevState) => !prevState);
    };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
        <SunIcon />
        <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={isEnabled}
        //   checked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  );
}