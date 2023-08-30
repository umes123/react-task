import React from 'react'
import Form from './Form'
import Table from './Table'
import Piechart from './Piechart'

export default function App() {
  return (
    <div>
      <Form></Form>
      <div className='container'>
        <h1 className='text-center' style={{margin:"20px"}}>DATA</h1>
        <div className='row'>
          <div className='col-md-6'>
            <Table></Table>
          

          </div>
          <div className='col-md-6'>
            <Piechart></Piechart>
          

          </div>

        </div>
      </div>

    </div>
  )
}
