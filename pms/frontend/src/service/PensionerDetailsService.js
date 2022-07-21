import axios from "axios";
import Pensioner from "../models/Pensioner";

const getapi=`http://localhost:9082/pensionerDetailByAadhaar/123456789012`;
const addapi="http://localhost:8082/addpensioner";
class PensionerDetailService{
    getPensionerDetail() {
        return axios.get(getapi);
    }

}
export default new PensionerDetailService();