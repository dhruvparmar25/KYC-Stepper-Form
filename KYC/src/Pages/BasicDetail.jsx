import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

function BasicDetail() {
  const [formData, setFormData] = useState({
    category: "",
    company: "",
    businessType: "",
    gst: "",
    primaryContact: "",
    primaryEmail: "",
    secondaryEmail: "",
    bod: "",
    country: "",
    mobileNo: "",
    phneNo: "",
    faxNo: "",
    salesPerson: "",
    assisten: "",
    reamrk: "",
    registration: "",
    department: ""
  })

  const handelInputchange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <div>
      <Topbar />
      <Navbar />
      <div >

        <div className='Category detatl w-[98%] m-auto border-b-1 border-zinc-300 py-4 flex gap-10'>
          <h1 className='text-[20px] font-bold' >Category Details</h1>
          <div className='flex justify-between items-center'>
            {/* category */}
            <div>
              <label>category <span className='text-red-600'>*</span></label><br />
              <select name="category" value={formData.category} onChange={handelInputchange} >
                <option >Select category</option>
                <option value="Option-1">option-1</option>
                <option value="Option-2">option-2</option>
              </select>
            </div>
            {/* Company/Individual */}
            <div>
              <label>Company/Individual <span className='text-red-600'>*</span></label><br />
              <input type="text" name='company' placeholder='Enter Name' value={formData.company} onChange={handelInputchange} />
            </div>
            {/* Business Type */}
            <div>
              <label>Business Type <span className='text-red-600'>*</span></label><br />
              <select name="businessType" value={formData.businessType} onChange={handelInputchange} >
                <option >Select category</option>
                <option value="Option-1">option-1</option>
                <option value="Option-2">option-2</option>
              </select>
            </div>
            {/* GST No */}
                 <div>
              <label>GST No</label><br />
              <input type="text" name='gst' placeholder='Enter Name' value={formData.gst} onChange={handelInputchange} />
            </div>
          </div>
        </div>
        <div className='contact detatl w-[98%] m-auto border-b-1 border-zinc-300 py-4' >
          <h1 className='text-[20px] font-bold' >Contact Details</h1>


        </div>
        <div className='otherdetail detatl w-[98%] m-auto border-b-1 border-zinc-300 py-4'>
          <h1 className='text-[20px] font-bold' >Other Details</h1>

        </div>
        {formData.company}
        {formData.businessType}
        {formData.gst}
      </div>
    </div>
  )
}

export default BasicDetail