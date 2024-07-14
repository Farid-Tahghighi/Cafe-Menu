import Coffee from "../../images/Coffee.jpg";
import categories from "../data/SideMenuData";
import "../index.css";

interface Props {
  setCategory: (category: string) => void;
}

const Sidebar = ({ setCategory }: Props) => {
  return (
    <div
      className="bg-cover h-ful w-4/12 border-l-2 border-amber-800"
      style={{ backgroundImage: `url(${Coffee})` }}
    >
      <div className="h-full bg-black bg-opacity-60 text-white flex flex-col content-center px-2">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div
              className="flex flex-row justify-end items-center font my-4 mr-0.5 shad"
              onClick={() => setCategory(c.type)}
            >
              <h4 className="text-2xl text-center">{c.title}</h4>
              <Icon className="text-white w-6 h-6 ml-2"/>
            </div>
          );
        })}
        <p className="text-xs font text-white text-end">
          منوی مورد نظر را لمس کنید
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
