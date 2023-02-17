import Clock from "../Clock";

const HomePage = () => {
  return (
    <div className="bg-home-banner-image bg-cover h-screen relative">
      {/* <div className="absolute flex flex-col leading-none justify-center top-0 left-0 right-0 bottom-0 m-auto rounded-md  py-2 text-[50px] font-semibold text-white text-center h-[10vh] w-[300px] animate-pulse">
       <Clock/>
      </div> */}
      <div className="absolute flex flex-col leading-none justify-center top-0 left-0 right-0 bottom-0 m-auto rounded-md  py-2 text-[50px] font-semibold text-white text-center h-[10vh] w-[300px] animate-pulse">
        <span>COMING</span>
        <span>SOON</span>
      </div>
    </div>
  );
};

export default HomePage;
