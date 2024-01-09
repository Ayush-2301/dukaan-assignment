import Home from "@/public/Navbar/Home.svg";
import Orders from "@/public/Navbar/Orders.svg";
import Products from "@/public/Navbar/Products.svg";
import Delivery from "@/public/Navbar/Delivery.svg";
import Marketing from "@/public/Navbar/Marketing.svg";
import Analytics from "@/public/Navbar/Analytics.svg";

import Payments from "@/public/Navbar/Payments.svg";
import Tools from "@/public/Navbar/Tools.svg";
import Discounts from "@/public/Navbar/Discounts.svg";
import Audience from "@/public/Navbar/Audience.svg";
import Appearance from "@/public/Navbar/Appearance.svg";
import Plugins from "@/public/Navbar/Plugins.svg";
import { SidebarItems } from "@/typings/type";
export const sideBarItems: SidebarItems[] = [
  {
    title: "Home",
    logo: Home,
    route: "/Home",
  },
  {
    title: "Orders",
    logo: Orders,
    route: "/Orders",
  },
  {
    title: "Products",
    logo: Products,
    route: "/Products",
  },
  {
    title: "Delivery",
    logo: Delivery,
    route: "/Delivery",
  },
  {
    title: "Marketing",
    logo: Marketing,
    route: "/Marketing",
  },
  {
    title: "Analytics",
    logo: Analytics,
    route: "/Analytics",
  },
  {
    title: "Payments",
    logo: Payments,
    route: "/Payments",
  },
  {
    title: "Tools",
    logo: Tools,
    route: "/Tools",
  },
  {
    title: "Discounts",
    logo: Discounts,
    route: "/Discounts",
  },
  {
    title: "Audience",
    logo: Audience,
    route: "/Audience",
  },
  {
    title: "Appearance",
    logo: Appearance,
    route: "/Appearance",
  },
  {
    title: "Plugins",
    logo: Plugins,
    route: "/Plugins",
  },
];
type props = {
  item: String;
};
export const paginationItems: props[] = [
  {
    item: "1",
  },
  {
    item: "...",
  },
  {
    item: "10",
  },
  {
    item: "11",
  },
  {
    item: "12",
  },
  {
    item: "13",
  },
  {
    item: "14",
  },
  {
    item: "15",
  },
  {
    item: "16",
  },
  {
    item: "17",
  },
  {
    item: "18",
  },
];
