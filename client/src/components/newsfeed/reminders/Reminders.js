import "./Reminders.css";
import axios from "axios";
const authAxios  =axios.create({
    baseURL:'http://localhost:3001/',
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
});
const Reminders = () => {
    return <div>
        
        <ul>
            <hr/>
        <h5>Reminders</h5>
       <li>ul li Lorem dolor amet sit 
       </li>
       <li>ul li Lorem dolor amet sit 
       </li>
       <li>ul li Lorem dolor amet sit 
       </li>
       <li>ul li Lorem dolor amet sit 
       </li>
       <li>ul li Lorem dolor amet sit 
       </li>
       <li>ul li Lorem dolor amet sit 
       </li>
       <hr/>
    </ul>
   </div>
}
export default Reminders;