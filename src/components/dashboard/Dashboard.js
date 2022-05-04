import React from 'react'
import { useGlobalContext } from '../context';
import { Navigate ,useNavigate} from 'react-router-dom';
//
 
//
const Dashboard = () => {
  let navigate = useNavigate()
  const {isLoggedin ,transData,loading ,isCheck,addToGroup,updatePaid} = useGlobalContext() || {}


  if (! isLoggedin) {
    return <Navigate to="/" replace />;
  }
  // 
  const  addTrans = e =>{
    navigate('/addTrans')
  }
  // if(loading){
  //   return(
  //     <div className='d-flex justify-content-center '>loading...</div>
  //   )
  // }
  // 
  return (
    <div className='container'>
        <div className='row '>
            <div className='col-lg-12'>
            <table className="table table-striped table-dark">
                          {/*  */}
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">transaction from</th>
                              <th scope="col">transaction with</th>
                              <th scope="col">reason</th>
                              <th scope="col">transaction type</th>
                              <th scope="col">transaction date</th>
                              <th scope='col'>transaction status</th>
                            </tr>
                            <tbody>
                            {
                              transData  ?  transData.map((item,index)=>{
                                const {id,reason,transaction_date,transaction_from ,transaction_id,transaction_status, transaction_type, transaction_with} = item || {}
                                return(
                                  transaction_from ===null || transaction_with ? '' :
                                  <tr key={index}>
                                       <th scope ='row' >-</th>
                                       <td>{transaction_from}</td>
                                       <td>{transaction_with}</td>
                                       <td>{reason}</td>
                                       <td>{transaction_type}</td>
                                       <td>{transaction_date}</td>
                                       <td>{transaction_status}</td>
                                       {
                                         transaction_status==='unpaid' &&
                                                 <td>
                                                    <div class="input-group-text">
                                                          <input type="checkbox"
                                                          checked={isCheck.includes(transaction_id)}
                                                          onChange={e=>addToGroup(e,transaction_id)}
                                                          
                                                          />
                                                    </div>
                                                 </td>
                                       }
                                  </tr>
                      
                                )
                              }) 
                              : 
                              <tr>
                                <td>Nothing to show</td>
                              </tr>

                            } 
                            </tbody>
                          </thead>
                          {/*  */}
                        </table>
              
              <div className='d-flex justify-content-space-between'>
                 <button className='btn btn-lg btn-success' onClick={e=>addTrans(e)}>Add a transcaction</button>
                 <div>
                 {
                  isCheck.length >0  &&  
                   <button className='btn btn-lg btn-success' 
                      onClick={e=>updatePaid(e)}>
                     Update
                   </button>
                 }
                 </div>
               </div>
               

            </div>
        </div>
    </div>
  )
}

export default Dashboard