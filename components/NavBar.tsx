import Image from "next/image";
import SearchBar from "./SearchBar";
import NavBarDropDown from "./NavBarDropDown";
import chaticon from "@/public/Dashboard/Icons/Vector.svg";
import polygon from "@/public/Dashboard/Icons/Polygon 2.svg";
const NavBar = () => {
  return (
    <div className=" border-b-sidebarPrimaryFont border-b w-full px-[32px] py-[12px] flex justify-between items-center ">
      <div className="flex gap-[16px] justify-center items-center">
        <p className="  text-primaryFontColor text-[15px] font-normal leading-[22px]">
          Payments
        </p>
        <div className=" flex justify-center items-center gap-[6px]">
          <Image
            src={"/Dashboard/Outlined/QuestionMark.svg"}
            width={14}
            height={14}
            alt="quesiton mark"
            className="w-auto h-auto"
          />
          <p className=" text-dashBoardAccentColor text-[12px] leading-[16px] font-normal">
            How it works
          </p>
        </div>
      </div>
      <SearchBar />
      <div className=" flex gap-[12px] items-center">
        <NavBarDropDown logo={chaticon} title={"chaticon"} />
        <NavBarDropDown logo={polygon} title={"polygon"} />
      </div>
    </div>
  );
};

export default NavBar;
