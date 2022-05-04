import React from 'react'
import Alert from '../Alert'
import { useGlobalContext } from '../context'

const AddTrans = () => {
    const {transactionFrom , 
        settransactionFrom , 
        settransactionWith ,
        setselectValue,
        submitData ,alert,reason,setreason}  = useGlobalContext() || {}
    // 
        
    // 
    const dropOnChange = e =>{
        setselectValue(e.target.value)
    }
    // 
    const dropOnChange1 = e =>{
      settransactionWith(e.target.value)
  }
    // 
  return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-12'>
                    {
                        alert.show && <Alert/>
                    }
                    {/*  */}
                    Add A transaction
                    {/*  */}
                    <form>
                        <input 
                        type='text' 
                        placeholder='read only'
                        value='3'
                        
                        className='form-control mb-2'
                        />

                       <select  className='form-control mb-2' defaultValue='select transaction With' onChange={e=>dropOnChange1(e)}>
                            <option value='select an value' disabled>
                              Select transaction with
                            </option>
                           <option value='2'>
                             2
                           </option>
                           <option value='3'>
                           3
                           </option>
                           <option value='4'>
                              4
                           </option>
                      </select>

                        <input 
                        type='text' 
                        placeholder='reason'
                        value={reason}
                        onChange={e=>setreason(e.target.value)}
                        className='form-control mb-2'
                        />

                       <select  className='form-control mb-2' defaultValue='select an method' onChange={e=>dropOnChange(e)}>
                            <option value='select an method' disabled>
                              Select An method
                            </option>
                           <option value='borrows'>
                             borrows
                           </option>
                           <option value='lendes'>
                            lendes
                           </option>
                      </select>
                      <button className='btn btn-info' onClick={e=>submitData(e)}>Submit </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddTrans