import Clock from "../Clock";

const HomePage = () => {
  return (
    <div className="bg-home-banner-image bg-cover h-screen relative">
      <div className="absolute flex flex-col leading-10 justify-center  rounded-md  py-2 text-[20px] font-semibold text-white text-center h-[10vh] w-[300px]">
        <span>fourbit</span>
      </div>
      <div className="absolute flex flex-col leading-none justify-center top-0 left-0 right-0 bottom-0 m-auto rounded-md  py-2 text-[50px] font-semibold text-white text-center w-full h-full">
       <Clock/>
      </div>
      <div className="absolute flex gap-4 justify-center left-0 right-0 bottom-16 m-auto rounded-md  py-2 text-[40px] font-semibold text-white text-center h-[10vh] w-[300px] animate-pulse">
        <span>COMING</span>
        <span>SOON</span>
      </div>
    </div>
  );
};

export default HomePage;
