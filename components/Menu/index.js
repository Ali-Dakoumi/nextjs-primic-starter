import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const Menu = ({ menu_items: menuItems, logo }) => {
  const data = { menuItems, logo };
  return (
    <header className="py-3 lg:py-6">
      <Desktop {...data} />
      <Mobile {...data} />
    </header>
  );
};
