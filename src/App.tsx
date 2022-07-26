import { useState } from 'react'
import { useEffect } from 'react'
import List from './components/List'
import CustomInput from './components/CustomInput'
import DatePicker from 'react-date-picker';
import './App.css'
interface Currency {
  currencies: any
  name: string

}

function App() {
  const [Ownstate, setOwnState] = useState({
    yourCompany: '',
    yourName: '',
    companyAddress: '',
    cityOrZipCode: '',
    country: '',
    clientCompany: '',
    clientName: '',
    clientCompanyAddress: '',
    clientCityOrZipCode: '',
    clientCountry: '',
    item_Description: '',
    quantity: '',
    rate: '',
    amount: '',
    billTo: 'Bill To :',
    invoice: 'Invoice#',
    invoiceValue: '',
    invoiceDate: 'Invoice Date',
    invoiceDateValue: '',
    invoiceDueDate: 'Due Date',
    invoiceDueDateValue: '',
    date: new Date(),
  })
  // const [billstate, setBillState] = useState({
  //   clientCompany: '',
  //   clientName: '',
  //   clientCompanyAddress: '',
  //   clientCityOrZipCode: '',
  //   clientCountry: ''

  // })
  // const [products, setProducts] = useState({
  //   item_Description: '',
  //   quantity: '',
  //   rate: '',
  //   amount: ''
  // })
  // const [billTo, setBillTo] = useState('Bill To :')

  const handleBillChange = (e: any) => {
    const { name, value } = e.target
    setOwnState({
      ...Ownstate,
      [name]: value
    })
  }



  return (
    <form className="mx-auto w-10/12 sm:w-10/12 flex flex-col gap-24 shadow-lg bg-slate-200 h-[100vh] my-20 p-10">
      <div id='ownState ' className='flex justify-between '>
        <div className='flex flex-col w-[40%] gap-2'>
          <CustomInput placeholder='Your Company' name='yourCompany' onChange={handleBillChange} value={Ownstate.yourCompany} className=' focus:outline-dotted outline-1 bg-inherit outline-blue-200 py-1 focus:bg-orange-200 focus:font-bold focus:placeholder:font-normal text-slate-800 px-2' onBlur={(e: any) => e.target.value.trim() !== '' ? e.target.classList.add('font-bold') : e.target.classList.remove('font-bold')} />
          <CustomInput placeholder='Your Name' onChange={handleBillChange} value={Ownstate.yourName} name='yourName' className=' focus:outline-dotted outline-1 bg-inherit  outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal text-slate-800 px-2' />
          <CustomInput placeholder="Company's Address" onChange={handleBillChange} value={Ownstate.companyAddress} name='companyAddress' className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal text-slate-800 px-2' />
          <CustomInput placeholder='City ,state or Zip' onChange={handleBillChange} value={Ownstate.cityOrZipCode} name='cityOrZipCode' className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal text-slate-800 px-2' />

          <select id="country" name="country" className="bg-inherit py-2 w-40 outline-1 outline-blue-400 border-none" aria-label='country'>
            <option value="">country</option>
          </select>

        </div>
        <h1 className='text-5xl'>INVOICE</h1>

      </div>

      <div id='bilState' className='flex gap-8 '>
        <div className='flex flex-col gap-2 flex-1'>
          <div>
            <label htmlFor="billTo"></label>
            <CustomInput id='billTo' name='billTo' onChange={handleBillChange} value={Ownstate.billTo} className=' focus:outline-dotted outline-1 bg-inherit  outline-blue-200 py-1 focus:bg-orange-200 font-bold focus:placeholder:font-normal px-2' />
          </div>

          <div id="billInput" className='flex flex-col gap-4'>
            <CustomInput placeholder="Your Client's Company" name='clientCompany' value={Ownstate.clientCompany} onChange={handleBillChange} className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
            <CustomInput placeholder="Client's Address" name='clientCompanyAddress' value={Ownstate.clientCompanyAddress} onChange={handleBillChange} className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
            <CustomInput placeholder='City ,state Zip' name='clientCityOrZipCode' value={Ownstate.clientCityOrZipCode} onChange={handleBillChange} className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200 focus:placeholder:font-normal  px-2' />
          </div>
          <select id="country" name="country" className="py-2" aria-label='country'>
            <option value="">country</option>
          </select>


        </div>
        < div id='invoice#'>
          <div className='flex'>
            <CustomInput name='invoice' onChange={handleBillChange} value={Ownstate.invoice} className='bg-inherit  w-[150px] focus:outline-dotted font-bold outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
            <CustomInput name='invoiceValue' placeholder='inv 12' onChange={handleBillChange} value={Ownstate.invoiceValue} className='bg-inherit   focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
          </div>
          <div><CustomInput name='invoiceDate' onChange={handleBillChange} value={Ownstate.invoiceDate} className='bg-inherit  w-[150px] font-bold focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
            <CustomInput type='date' name='invoiceDateValue' onChange={handleBillChange} value={Ownstate.invoiceDateValue} className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
          </div>
          <div><CustomInput name='invoiceDueDate' onChange={handleBillChange} value={Ownstate.invoiceDueDate} className=' bg-inherit w-[150px] font-bold focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
            <CustomInput name='invoiceDueDateValue'   onChange={handleBillChange}  value={Ownstate.invoiceDueDateValue} className='bg-inherit  focus:outline-dotted outline-1 outline-blue-200 py-1 focus:bg-orange-200  focus:placeholder:font-normal  px-2' />
          </div>




        </div>
      </div>

      {/* table */}
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Item Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td className=' px-2 border'><CustomInput type='text' /></td> 
            <td className=' px-2'><CustomInput type='number' /></td>
            <td className=' px-2'><CustomInput type='number' /></td>
            <td className=' px-2'><CustomInput type='number' /></td>
          </tr>
        </tbody>
      </table>



    </form >
  )
}

export default App
