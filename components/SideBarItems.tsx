import Image, { StaticImageData } from "next/image";
type props = {
  title: String;
  logo: StaticImageData;
  route: String;
};

const SideBarItems = ({ title, logo, route }: props) => {
  return (
    <div
      className={` ${
        title === "Payments"
          ? "bg-activeSidebarItem w-[208px] translate-x-[-10px]"
          : ""
      } py-[8px] px-[8px] flex gap-[12px] rounded-sm  `}
    >
      <Image
        src={logo}
        width={20}
        height={20}
        alt="image"
        className=" text-sidebarPrimaryFont w-auto h-auto "
      />
      <p
        className={`${
          title === "Payments" ? "text-white" : "text-sidebarPrimaryFont "
        } text-[14px] font-normal leading-[20px] `}
      >
        {title}
      </p>
    </div>
  );
};

export default SideBarItems;
