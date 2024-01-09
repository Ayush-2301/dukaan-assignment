const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-medium text-[20px] leading-[28px] text-primaryFontColor">
      {children}
    </div>
  );
};

export default Heading;
