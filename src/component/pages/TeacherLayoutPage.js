import React, { useEffect, useState } from "react";
import Sidebar from "../teacherFolder/TeacherSidebar";
import SectionContainer from "../teacherFolder/TeacherSectionContainer";

function TeacherLayoutPage() {
  const [section, setSection] = useState("Dashboard");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative sm:w-screen sm:h-screen sm:flex sm:flex-row flex flex-col w-full h-full">
      <Sidebar
        section={section}
        setSection={setSection}
        windowWidth={windowWidth}
      />
      <SectionContainer section={section} windowWidth={windowWidth} />
    </div>
  );
}

export default TeacherLayoutPage;
