import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useAdmin = () =>{
    const {user,loading} = useAuth()
    const token = localStorage.getItem('access-token')
    const {data:isAdmin={},isLoading:adminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,
            {headers:{
              authorization:`bearer ${token}`
            },
           
        })
        // console.log(res)
            return res.json();
            // const result= res.json()
            // console.log('22',result)
            // return result;
        }
    })
    return{isAdmin,adminLoading}
}

export default useAdmin;