import Clock from "../Clock";

const HomePage = () => {
  return (
    <div className="bg-home-banner-image bg-cover h-screen relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
      <div className="absolute left-10 top-10 text-[20px] md:text-[30px] font-semibold text-white h-[10vh] w-[300px]">
        <span>fourbit</span>
      </div>
      <div className="absolute flex flex-col leading-none rounded-md py-2 font-semibold text-white text-center w-full h-full">
       <Clock/>
      </div>
      <div className="absolute flex gap-4 justify-center left-0 right-0 bottom-32 m-auto rounded-md  py-2 text-[30px] md:text-[40px] font-semibold text-white text-center h-[10vh] w-[300px] animate-ping">
        <span>COMING</span>
        <span>SOON</span>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
