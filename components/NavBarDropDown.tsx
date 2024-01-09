import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image, { StaticImageData } from "next/image";

const NavBarDropDown = ({
  logo,
  title,
}: {
  logo: StaticImageData;
  title: String;
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="bg-highlightColor rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <Image
              src={logo}
              width={20}
              height={20}
              className={`${
                title === "chaticon"
                  ? "h-[20px] w-[20px]"
                  : "w-[12.73px] h-[12.73px]"
              }`}
              alt={`${
                title === "chaticon" ? "chat-icon-logo" : "polygon-icon-logo"
              }`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{title} DropDown Content</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBarDropDown;
