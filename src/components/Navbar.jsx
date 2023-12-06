import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [lng, setLng] = useState(true);
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "bn",
      name: "বাংলা",
      country_code: "bd",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "sa",
      dir: "rtl",
    },
  ];

  useEffect(() => {
    const currentLng = Cookies.get("i18next") || "en";
    const currentDir = languages.filter((l) => l.code === currentLng);
    document.body.dir = currentDir[0].dir || "ltr";
  }, [lng]);

  const handleLocaleChanges = (e) => {
    i18next.changeLanguage(e);
  };
  return (
    <nav className="navContainer">
      <ul className="listContainer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="select_lng">
        <select
          onChange={(e) => {
            handleLocaleChanges(e.target.value);
            setLng(!lng);
          }}
        >
          <option value="en" defaultChecked>
            Select an Language
          </option>
          {languages.map((ln, index) => (
            <option value={ln.code} key={index}>
              {ln.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
