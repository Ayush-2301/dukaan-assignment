import Heading from "@/components/Heading";
import chevronDown from "@/public/icons/Path 2 Copy.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import StatsCard from "@/components/StatsCard";
import TransactionsSection from "@/components/TransactionsSection";
const page = () => {
  return (
    <div className=" h-full flex flex-col  bg-[#FAFAFA]">
      <div className="  bg-[#FAFAFA] p-[32px] pb-[0px]">
        <div className=" flex justify-between mb-[24px]">
          <Heading>Overview</Heading>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex justify-center items-center gap-[7px] px-[14px] py-[6px] border border-[#D9D9D9] bg-white rounded-[4px]">
                <p className=" text-[16px] leading-[24px] font-normal text-dashBoardAccentColor ">
                  Last Month
                </p>
                <Image
                  src={chevronDown}
                  width={12}
                  height={12}
                  alt="chevron down"
                  className="w-auto h-auto"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> DropDown Content</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-[20px] items-center mb-[32px] ">
          <StatsCard title={"Online orders"} stats={"231"} />
          <StatsCard title={"Amount received"} stats={"₹23,92,312.19"} />
        </div>
        <TransactionsSection />
      </div>
    </div>
  );
};

export default page;
