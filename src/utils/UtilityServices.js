export default class UtilityService {

    static RetrieveAuthorizationHeader(){
        let userAuthDetailsString =  localStorage.getItem("access");
        if(userAuthDetailsString===undefined || userAuthDetailsString===null || userAuthDetailsString==="" )
        return "";
        let userAuthDetails = JSON.parse(userAuthDetailsString);
        return `Bearer ${userAuthDetails.token}`;
    }

    static RetrieveRole(){
        let userAuthDetailsString =  localStorage.getItem("access");
        if(userAuthDetailsString===undefined || userAuthDetailsString===null || userAuthDetailsString==="" )
        return [];
        let userAuthDetails = JSON.parse(userAuthDetailsString);
        return userAuthDetails.role;
    }

    static IsUserQualifiedForRole(allowedRole){
        let isUserQualified = false;
        let userRole = this.RetrieveRole();
        let roleFound = allowedRole.includes(userRole);
        if(roleFound === true)
        isUserQualified = roleFound
        return isUserQualified;
    }

}