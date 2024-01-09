import Heading from "@/components/Heading";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import sorticon from "@/public/Button/Outlined/Vector.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import TransactionCard from "./TransactionCard";
import PaginationComponent from "./PaginationComponent";

const TransactionsSection = () => {
  const renderItems = () => {
    const items = [];

    for (let i = 0; i < 19; i++) {
      items.push(
        <div key={i}>
          <TransactionCard />
        </div>
      );
    }

    return items;
  };
  return (
    <div className="flex flex-col gap-[20px] ">
      <Heading>Transactions | This Month</Heading>
      <div className="bg-white p-[12px] flex flex-col shadow-statsCardShadow rounded-[8px] mb-[32px]">
        <main className=" flex justify-between items-center">
          <div className=" border border-[#D9D9D9] px-[16px] py-[10px] h-[40px] rounded-[4px] flex items-center gap-[8px] w-[248px]">
            <Image
              src={"/Input/Input/Search Field/Bold/Search.svg"}
              width={14}
              height={14}
              alt="search icon"
              className="w-auto h-auto"
            />
            <Input
              type="text"
              placeholder="Search by order ID..."
              className="placeholder:text-[14px] h-[20px] w-[194px] placeholder:leading-[20px] placeholder:font-normal placeholder:text-[#999999] text-[#999999]"
            />
          </div>
          <div className="flex gap-[12px]">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex justify-center items-center gap-[7px] px-[14px] py-[6px] border border-[#D9D9D9] bg-white rounded-[4px]">
                  <p className=" text-[16px] leading-[24px] font-normal text-dashBoardAccentColor ">
                    Sort
                  </p>
                  <Image
                    src={sorticon}
                    width={12}
                    height={12}
                    alt="chevron down"
                    className="w-auto h-auto"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort DropDown Content</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex justify-center items-center gap-[7px] p-[9.25px] cursor-pointer border border-[#D9D9D9] bg-white rounded-[4px] w-[36px] h-[36px] ">
              <Image
                src={"/icons/download.svg"}
                width={17.5}
                height={17.5}
                alt="download icon"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </main>
        <section>
          <div className=" bg-highlightColor flex items-center px-[12px] py-[10px] rounded-[4px] text-[14px] font-normal leading-[20px] text-dashBoardAccentColor mt-[12px]">
            <p className=" mr-[230px]">Order ID</p>
            <div className=" flex gap-[4.25px] items-center mr-[355px]">
              <p>Order date</p>
              <Image
                src="/Dashboard/Icons/Polygon 2.svg"
                width={5}
                height={5}
                alt="polygon"
                className="w-[6.97px] h-[6.97px]"
              />
            </div>
            <p className="mr-[156px] ">Order amount</p>
            <div className="flex items-center gap-[4.7px]">
              <p>Transaction fees</p>
              <HoverCard>
                <HoverCardTrigger>
                  <Image
                    src={"/Outlined/Vector.svg"}
                    width={12.6}
                    height={12.6}
                    alt="hover icon"
                  />
                </HoverCardTrigger>
                <HoverCardContent className=" bg-dashBoardAccentColor text-white text-[12px] leading-[16px] py-[4px] px-[8px] w-[294px] h-[40px]">
                  Transaction fees are charged as a percentage of the order
                  amount according to your plan.
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>
        {renderItems()}
        <div className=" flex justify-center items-center">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default TransactionsSection;
