import rocket from '../../assets/rocket.png';
import HeroImg from '../../assets/HeroImg.png';


function Sections() {


  return (
    <div className="w-full h-full flex flex-col items-center gap-4 mb-10 px-1 sm:px-[1%] md:px-[3%] lg:px-[6%] xl:px-[12.5%] xl:mt-6">
      <div className=" w-full flex flex-col sm:flex-row bg-[#245DE1] justify-between  text-white sm:h-[200px] md:h-[300px] lg:h-[400px] p-5 sm:p-0">
        <div className=" flex flex-col justify-center gap-4 w-full sm:w-[70%] md:w-[70%] lg:w-[60%] sm:px-8 sm:py-4 md:py-0 text-center sm:text-left">
          <p className="text-[24px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7 sm:leading-[40px] lg:leading-[50px] ">
            Empower education with effortless assignment collaboration.
          </p>
          <h3 className="text-[10px] sm:text-sm md:text-md lg:text-lg">
            Simplify learning,elevate collaboration your all-in-one assignment
            management solution for students and teachers
          </h3>
          <div className='w-full'>
            <button className="bg-white w-fit text-[#245DE1] hover:bg-blue-500 hover:text-white text-lg  sm:py-1 sm:px-2 md:py-2 md:px-2 lg:py-3 lg:px-8 rounded-md">
              Start Demo
            </button>
          </div>
        </div>

        <div className="hidden w-full sm:w-[30%] md:w-[30%] lg:w-[40%]  sm:flex justify-center overflow-hidden blur-sm sm:blur-none">
          <img className="w-auto" src={HeroImg} alt="HeroImg" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center">
        <div className="w-[50%] flex justify-center">
          <img
            src={rocket}
            className=" rounded-full border-2  hover:translate-y-[-50px] transition-all hover:transition-all"
            alt=""
          />
        </div>

        <p
          className="flex justify-center text-[24px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7 mt-3 text-[#245DE1]"
        >
          Process based Paperless Day to Day Academics
        </p>
        <p className="text-[10px] sm:text-sm md:text-md lg:text-lg px-7 text-gray-500 my-2">
          Manage your daily activities completely digitally{" "}
        </p>
      </div>
    </div>
  );
}

export default Sections