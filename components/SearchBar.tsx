import Image from "next/image";
import { Input } from "@/components/ui/input";
const SearchBar = () => {
  return (
    <div className=" bg-highlightColor px-[16px] py-[9px] flex items-center gap-[8px] w-[400px] h-[40px] rounded-[6px]">
      <Image
        src="/Dashboard/Icons/search.svg"
        width={16}
        height={16}
        alt="search icon"
        className="w-auto h-auto"
      />
      <Input
        className="bg-transparent p-0 m-0 border-none placeholder:text-[15px] placeholder:font-normal placeholder:leading-[22px] placeholder:text-[#808080] text-[#808080] h-[22px]"
        type="text"
        placeholder="Search features, tutorials, etc."
      />
    </div>
  );
};

export default SearchBar;
