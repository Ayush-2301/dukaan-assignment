const PaginationBox = ({ item }: { item: String }) => {
  return (
    <div
      className={`w-[28px] cursor-pointer h-[28px] text-[14px] leading-[20px] font-normal py-[4px] px-[6px] rounded-[4px] text-dashBoardAccentColor flex justify-center items-center ${
        item === "10" ? "bg-blueColor text-white" : "bg-transparent"
      }`}
    >
      {item}
    </div>
  );
};
export default PaginationBox;
