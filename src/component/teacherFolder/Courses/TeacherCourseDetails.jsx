import React, { useEffect, useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CourseDetails from '../../CommonComponents/CourseDetails';

function TeacherCourseDetails() {

  return (
    <div className='p-2'>
      <CourseDetails/>
    </div>
  );
}

export default TeacherCourseDetails;
