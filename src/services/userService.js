import axios from "axios";
import header from '../headers/mainHeader.js'
class UserService {
    // for edit user
    editProfileJs(userInfo) {
        return axios
            .put(
                "/user/editProfile",
                userInfo,
                header()
            )
    }

    // for get user details
    getUserInfo(){
        return axios.get(
            "/user/me",
            header())
            .then((response)=>{
                return response
            })
    }

    // for create a blog with three argument
    createBlog(title,category,body){
        return axios.post(
        "/blog",
        {
            title,category,body
        },
        header()
        )
    }
    
}

export default new UserService;