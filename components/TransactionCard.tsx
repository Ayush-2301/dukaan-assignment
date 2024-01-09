const TransactionCard = () => {
  return (
    <div className="px-[12px] py-[14px] border-b border-b-[#E6E6E6] flex items-center">
      <p className="mr-[226px] text-[14px] leading-[20px] text-blueColor font-normal">
        #281209
      </p>
      <p className=" mr-[387px] text-[14px] leading-[20px] text-primaryFontColor font-normal">
        7 July, 2023
      </p>
      <p className="mr-[261px] text-[14px] leading-[20px] text-primaryFontColor font-normal">
        ₹1,278.23
      </p>
      <p className="text-[14px] leading-[20px] text-primaryFontColor font-normal">
        ₹22
      </p>
    </div>
  );
};

export default TransactionCard;
