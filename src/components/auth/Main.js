import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {useGlobalContext} from '../context'
import Alert from '../Alert'
const Main = () => {

    const { alert} = useGlobalContext()

  return (
    <>
        <div className='container '>
            <div className='row justify-content-center'>
                <div className='col-lg-8 align-items-center'>
                    {
                        alert.show && <Alert />
                    }
                   <Login/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main