import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="font-montserrat"
          />
        </a>
        <ul className="flex-1 flex items-center gap-16 max-lg:hidden justify-end">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}

          <button className="font-montserrat text-lg text-white bg-black px-8 py-3 rounded-lg">
            {" "}
            login{" "}
          </button>
        </ul>

        <div>
          <img src={hamburger} width={25} height={25} alt="Hamburger" className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
