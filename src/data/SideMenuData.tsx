import { PiCoffeeLight } from "react-icons/pi";
import { BiLeaf } from "react-icons/bi";
import { LuCupSoda } from "react-icons/lu";
import { GiIceCubes } from "react-icons/gi";
import { GiPieSlice } from "react-icons/gi";
import { IconType } from "react-icons";
import { GiHotSurface } from "react-icons/gi";

const categories: { icon: IconType; title: string; type: string }[] = [
  { title: "قهوه", icon: PiCoffeeLight, type: "Coffee" },
  { title: "آیس", icon: GiIceCubes, type: "Ice" },
  { title: "چای", icon: BiLeaf, type: "Tea" },
  { title: "بار گرم", icon: GiHotSurface, type: "Warm" },
  { title: "بار سرد", icon: LuCupSoda, type: "Cold" },
  { title: "کیک", icon: GiPieSlice, type: "Cake" },
];

export default categories;
