import axios from "axios";

export class UserServices{
    private static URL:String = "https://jsonplaceholder.typicode.com/users"

    public static getAllusers(){
        let UserURL:string = `${this.URL}`
        return axios.get(UserURL)
    }
}