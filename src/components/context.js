import React ,{useContext,useState,useEffect}from 'react'
import axios from 'axios'


const AppContext = React.createContext()

const AppProvider = ({children}) =>{

  
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [alert, setalert] = useState({show:false,msg:'',cName:''})
    const [isLoggedin,setisLoggedin] = useState(false)
    const [transData, settransData] = useState()
    const [loading,setloading] = useState(false)
    const [transactionFrom, settransactionFrom] = useState('')
    const [transactionWith, settransactionWith] = useState('')
    const [selectValue ,setselectValue] = useState(null)
    const [reason,setreason] = useState('')
    const [loginName,setloginName] = useState('')
    const [isCheck, setIsCheck] = useState([]);
    
    // 
    
    // 
    const date = new Date();
    let dates = date.getFullYear() + "-"+ parseInt(date.getMonth()+1) +"-"+date.getDate()
    
    // 
    const submitData  = async(e) =>{
        e.preventDefault()
        if(  !transactionWith || !selectValue){
            showAlert(true, 'fill all the form' , 'danger')
        }
        else{
            try{
                await axios.post(`https://c76d-203-189-248-200.in.ngrok.io/api/get_transactions/`,{ 
                        reason:reason,
                        transaction_from:'3',
                        transaction_id:date,
                        transaction_status:'unpaid',
                        transaction_type:selectValue,
                        transaction_with:transactionWith,
                        transaction_date:dates
                }).then((res)=>{
                    console.log(res)
                    showAlert(true,`Added`,'success')
                })
            }
            catch(err){
                console.log(err)
                showAlert(true,`${err.message}`,'danger')
            }
        }

    }
    
   
    const getDetails = async() =>{
        setloading(false)

            try{
                const username1='abhishek'
                const res = await axios.get(`https://c76d-203-189-248-200.in.ngrok.io/api/get_transactions/?username=${username1}`)
                console.log(res.data)
                settransData(res.data)
            }
            catch(err){
                console.log(err)
            
            }
            setloading(true)
    }
    // 
    const showAlert = (show=false,msg='',cName='')=>{
        setalert({show,msg,cName})
    }
    // 
    const updatePaid = async(e) =>{
        e.preventDefault()
        try{
            
        }
        catch(err){
            console.log(err)
            showAlert(true,`${err.message}`,)
        }
    }
    // 
    const addToGroup = (e,id) =>{
        const {checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
          setIsCheck(isCheck.filter(item => item !== id));
        }
    }
    // 
    useEffect(() => {
        getDetails()
    }, [])
    
    // 
    return(
        <AppContext.Provider
         value={{
             username,
             setusername,
             password,
             setpassword,
             showAlert,
             alert,
             setalert,
             setisLoggedin,
             isLoggedin,
             transData, 
             settransData,
             loading,
             transactionFrom,
             settransactionFrom,
             transactionWith,
             settransactionWith,
             setselectValue,
             reason,
             setreason,
             submitData,
             setloginName,
             isCheck,
             addToGroup,
             updatePaid,
        }}>
            {children}
        </AppContext.Provider>
    )
}
// 
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
// 
export {AppContext,AppProvider}

