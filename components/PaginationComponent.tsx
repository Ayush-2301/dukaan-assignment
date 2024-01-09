import { Button } from "@/components/ui/button";
import Image from "next/image";
import { paginationItems } from "@/constants/index";
import PaginationBox from "./PaginationBox";

const PaginationComponent = () => {
  return (
    <div className="flex my-[24px]">
      <Button className="border bg-transparent border-[#D9D9D9] w-[100px] h-[32px] rounded-[4px] px-[12px] py-[6px] text-dashBoardAccentColor flex gap-[10px] hover:bg-transparent ">
        <Image
          src="/Outlined/ChevronLeft.svg"
          width={6}
          height={6}
          alt="chevron right"
        />
        <span>Previous</span>
      </Button>
      <div className=" flex gap-[8px] mx-[24px] justify-center items-center">
        {paginationItems.map((data, i) => {
          return (
            <div key={i}>
              <PaginationBox item={data.item} />
            </div>
          );
        })}
      </div>
      <Button className="border bg-transparent border-[#D9D9D9] w-[74px] h-[32px] rounded-[4px] px-[12px] py-[6px] text-dashBoardAccentColor flex gap-[10px] hover:bg-transparent">
        <span>Next</span>
        <Image
          src="/Outlined/ChevronRight.svg"
          width={6}
          height={6}
          alt="chevron right"
        />
      </Button>
    </div>
  );
};

export default PaginationComponent;
