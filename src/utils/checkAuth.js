import UtilityService from "../utils/UtilityServices";
import { RoleConst } from "../constants/RoleConstant";

export default function checkAuth() {

    let userAuthDetailsString = localStorage.getItem("access");
    let userAuthDetails = JSON.parse(userAuthDetailsString);
    let isUserQualified = UtilityService.IsUserQualifiedForRole([RoleConst.RECORDS, RoleConst.BANKADMIN, RoleConst.ICT, RoleConst.ADMIN])

    if (userAuthDetailsString === undefined || userAuthDetailsString === null || !isUserQualified) {
        return null;
    } else {
        return `Bearer ${userAuthDetails.token}`;
    }

}