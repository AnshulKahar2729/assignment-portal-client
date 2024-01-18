import rocket from '../../assets/rocket.png';
import HeroImg from '../../assets/HeroImg.png';


function Sections() {


  return (
    <div
      className="w-full h-full flex flex-col items-center gap-4"
      style={{ padding: " 1% 12.5%" }}
    >
      <div className="w-full flex flex-col sm:flex-row bg-[#245DE1] justify-between  text-white h-[400px]">
        <div className=" flex flex-col justify-center gap-4 w-[60%] px-8 ">
          <p className="text-2xl sm:text-[50px]" style={{ lineHeight: "50px" }}>
            Empower education with effortless assignment collaboration.
          </p>
          <h3 className="text-lg">
            Simplify learning,elevate collaboration your all-in-one assignment
            management solution for students and teachers
          </h3>
          <button className="bg-white w-fit text-[#245DE1] hover:bg-blue-500 hover:text-white text-lg py-3 px-8 rounded-md">
            Start Demo
          </button>
        </div>

        <div className="w-[40%]  flex justify-center overflow-hidden">
          <img className="sm:w-[300px] h-auto" src={HeroImg} alt="HeroImg" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-[50%] flex justify-center">
          <img
            src={rocket}
            className=" rounded-full border-2  hover:translate-y-[-50px] transition-all hover:transition-all cursor-pointer"
            alt=""
          />
        </div>

        <p
          id="id1"
          className="flex justify-center text-4xl mt-3 text-[#245DE1]"
        >
          Process based Paperless Day to Day Academics
        </p>
        <p className="text-xl p-7 text-[#245DE1]">
          Manage your daily activities completely digitally{" "}
        </p>
      </div>
    </div>
  );
}

export default Sections