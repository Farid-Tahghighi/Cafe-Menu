import MainBackground from "../../images/MainBackgound.jpg";
import "../index.css";

interface Item {
  name: string;
  price: string;
  type: string;
  category: string;
}

interface Props {
  items: Item[];
  types: string[];
}

const Menu = ({ items, types }: Props) => {
  return (
    <div
      className="w-4/5 bg-cover"
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <div className="h-full bg-black bg-opacity-75 text-white flex flex-col content-center px-2">
        {types.map((type) => (  
          <>
            {items[0].type === "" ? (
              ""
            ) : (
              <h3 key={type} className="text-white text-3xl text-right font mx-1 mb-2 mt-1 text-anim">
                {type}
              </h3>
            )}
            {items
              .filter((k) => k.type === type)
              .map((i) => (
                <>
                  <div key={i.name} className="text-anim flex flex-row justify-between items-center mx-1">
                    <p className="text-white text-lg font">{i.price}</p>
                    <p className="text-xl text-white text-right font">
                      {i.name}
                    </p>
                  </div>
                </>
              ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;
