import Navbar from './component/Navbar'
import Home from './page/Home'
import SignIn from './page/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClassUser from './page/ClassUser'
import Classes from './component/Classes'
import MembersOwnerClass from './component/MembersOwnerClass.jsx'
import SignUp from './page/SignUp'
import Settings from './page/Settings'
import InfoUser from './component/InfoUser'
import ChangePW from './component/ChangePW'
import ForgotPW from './page/Forgot-PW'
import ResetPW from './page/ResetPW'
import PrivateRoutes from './helper/PrivateRoutes'
import Deck from './page/Deck'
import Decks from './component/Decks.jsx'
import FlipCard from './page/FlipCard'
import Contact from './page/Contact'
import Card from './page/Card'
import Cards from './component/Cards'
import OwnerClasses from './component/OwnerClasses.jsx'
import AttendanceClasses from './component/AttendanceClasses.jsx'
import DetailClass from './component/DetailClass.jsx'
import AddMember from './component/AddMember'
import CommentClass from './component/CommentClass.jsx'
import Assignments from './component/Assignments.jsx'
import AssignmentTeacher from './page/AssignmentTeacher.jsx'
import DetailAssignment from './component/DetailAssignment.jsx'
import Submits from './component/Submits.jsx'
import MembersAttendanceClass from './component/MembersAttendanceClass.jsx'




function App() {

  

  return (
      <Router>
        <Navbar />
        <Routes>
          {/* private router */}
          <Route element={<PrivateRoutes />}>

            <Route path='/teacher/classes/:idClass/assignments/:idAssignment' element={<AssignmentTeacher />}>
              <Route path='' element={<DetailAssignment />}> </Route>
              <Route path='submits' element={<Submits />}> </Route>
            </Route>

            <Route path='/student/classes/:idClass/assignments/:idAssignment' element={<AssignmentTeacher />}>
              <Route path='' element={<DetailAssignment />}> </Route>
            </Route>


            {/* classes */}
            <Route path='/groups' element={<ClassUser />}>
              <Route path='' element={<Classes />}>
                <Route path='owner' element={<OwnerClasses />}></Route>
                <Route path='attendance' element={<AttendanceClasses />}></Route>
              </Route>

              <Route path='detail-owner/:id' element={<DetailClass></DetailClass>}>
                <Route path='add-member' element={<AddMember />} />
                <Route path='members' element={<MembersOwnerClass />} />
                <Route path='comments' element={<CommentClass />} />
                <Route path='assignments' element={<Assignments />} />
              </Route>

              <Route path='detail-attendance/:id' element={<DetailClass></DetailClass>}>
                <Route path='members' element={<MembersAttendanceClass />} />
                <Route path='comments' element={<CommentClass />} />
                <Route path='assignments' element={<Assignments />} />
              </Route>
              <Route path='detail-owner/:id' element={<DetailClass></DetailClass>}></Route>


              {/* 


                <Route path='add-member' element={<AddMember />} />
                <Route path='members' element={<MembersClass />} />
                <Route path='comments' element={<CommentClass />} />
                <Route path='assignments' element={<Assignments />} />

              </Route> */}

            </Route>

            <Route path='/decks' element={<Deck />}>
              <Route path='' element={<Decks />} />
              <Route path=':id/learn-cards' element={<FlipCard />} />
            </Route>

            <Route path="/cards" element={<Card />} >
              <Route path='' element={<Cards />} />
            </Route>

            {/* settings */}
            <Route path='/settings' element={<Settings />} >
              <Route path='info' element={<InfoUser />} />
              <Route path='password' element={<ChangePW />} />
            </Route>
          </Route>

          {/* public */}
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPW />} />
          <Route path='/reset-password' element={<ResetPW />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </Router>
  );
}

export default App