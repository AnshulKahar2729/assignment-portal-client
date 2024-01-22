import CourseDetails from '../../CommonComponents/CourseDetails';
import { useParams } from 'react-router-dom';

function StudentCourseDetails({}) {

  const { id } = useParams();
  // console.log(id)

  return (
    <div className='p-2'>
      <CourseDetails courseId={id}/>
    </div>
  );
}

export default StudentCourseDetails;
