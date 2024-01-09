"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sideBarItems } from "@/constants/index";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  return (
    <div className=" bg-sidebarBg flex flex-col h-full justify-between items-start p-[16px] w-[224px]">
      <div>
        <main className="flex  items-center gap-[12px]">
          <div className="bg-white rounded-sm w-[40px] h-[40px] grow-0">
            <Image
              src={"/Image.svg"}
              width={39}
              height={39}
              className="w-[40px] h-[40px] rounded-sm"
              alt="nishyan logo"
            />
          </div>
          <div className="w-[108px]">
            <p className=" text-white leading-[22px] text-[15px] font-medium">
              Nishyan
            </p>
            <a
              href="#"
              className=" text-sidebarPrimaryFont text-[13px] font-normal leading-[16px] underline underline-offset-2"
            >
              Visit Store
            </a>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown
                  size={20}
                  className=" text-white"
                  strokeWidth={3}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>DropDown Content</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </main>
        <section className=" mt-[24px] space-y-[4px]">
          {sideBarItems.map((item, i) => {
            return (
              <div key={i}>
                <SideBarItems
                  title={item.title}
                  logo={item.logo}
                  route={item.route}
                />
              </div>
            );
          })}
        </section>
      </div>
      <div className="bg-activeSidebarItem px-[12px] py-[9px] flex gap-[12px] justify-center items-center rounded-[4px]">
        <div className="bg-[#495064] p-[6px] w-[36px] h-[36px] rounded-[4px]">
          <Image
            src="/Navbar/outline/wallet.svg"
            width={24}
            height={24}
            alt="wallet icon"
          />
        </div>
        <div className="flex flex-col gap-[2px] ">
          <div className=" text-[#D7D8DD]  text-[13px] leading-[16px] w-[101px]">
            Available credits
          </div>
          <p className="text-white text-[16px] leading-[24px] font-medium">
            222.10
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
