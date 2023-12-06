import { Link } from "react-router-dom";

const Navbar = () => {
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
    },
  ];
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
        <select name="" id="">
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
