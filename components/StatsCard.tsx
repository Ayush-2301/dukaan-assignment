const StatsCard = ({ title, stats }: { title: String; stats: String }) => {
  return (
    <div className=" p-[20px] bg-white rounded-[8px] w-full h-[118px] flex flex-col gap-[16px] shadow-statsCardShadow">
      <p className=" text-[16px] font-normal leading-[24px] text-dashBoardAccentColor">
        {title}
      </p>
      <p className=" text-[32px] font-medium leading-[38px] text-primaryFontColor">
        {stats}
      </p>
    </div>
  );
};

export default StatsCard;
