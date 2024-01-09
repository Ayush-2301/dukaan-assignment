import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type props = {
  title: String;
  logo: StaticImageData;
  route: String;
};

const SideBarItems = ({ title, logo, route }: props) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${route}`}
      className={` ${
        pathname === route
          ? "bg-activeSidebarItem w-[208px] translate-x-[-10px]"
          : ""
      } py-[8px] px-[8px] flex gap-[12px] rounded-sm  hover:bg-activeSidebarItem hover:w-[208px] hover:translate-x-[-10px] ease-in-out transition-all `}
    >
      <Image
        src={logo}
        width={20}
        height={20}
        alt="image"
        className=" text-sidebarPrimaryFont w-auto h-auto"
      />
      <p
        className={`${
          pathname === route ? "text-white" : "text-sidebarPrimaryFont "
        } text-[14px] font-normal leading-[20px] `}
      >
        {title}
      </p>
    </Link>
  );
};

export default SideBarItems;
