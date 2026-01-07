import { THEMES } from "../../constants/themes";
import { useThemeStore } from "../../store/useThemeStore";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <nav className="navbar bg-base-100 shadow px-4">
      <div className="flex-1">
        <span className="text-xl font-semibold">Listify</span>
      </div>

      <div className="flex-none">
        <select
          className="select select-bordered select-sm"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {THEMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
