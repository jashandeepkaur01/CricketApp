import axios from "axios";
import { postdata } from "Redux/Actions/Postaction";
import { takeLatest,call} from "redux-saga/effects";
import 

function* setData(data){
    try{
        console.log(data)
        yield call(axios.post,'https://customcricketmatch-default-rtdb.firebaseio.com/teams',data.data);
    }
    catch(error){
        console.log(error)
    }
}

function* Sagaa(){
yield takeLatest(POSTDATA,setData);
}


export default Sagaa;