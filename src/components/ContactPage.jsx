import React from 'react'
import Navbar from './Navbar'

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
        <br />
       <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-warning">
                            <div className="card-body">
                                <h1 className="card-text text-center"><b>Book Your Events Now</b></h1>
                            </div>
                        </div>
                    </div>
                    
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <h3 className="card-text">Enter your Details</h3>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter name" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Phone No.</label>
                                        <input type="text" className="form-control" placeholder="Enter phone no." />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Select the event</label>
                                        <select name="" id="" class="form-select">
                                            <option value="Select the event">Select the event</option>
                                            <option value="Wedding Ceremony">Wedding </option>
                                            <option value="Birthday Party">Birthday Party</option>
                                            
                                            <option value="Music Concert">DJ Concert</option>
                                            <option value="Annual Day">Annual Day</option>
                                           
                                            <option value="Engagement Party">Engagement Party</option>
                                            
                                            <option value="Holiday Party">Celebrity Management</option>
                                            <option value="Festival Celebrations">Stage Decor</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Specify your event</label>
                                        <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder='say more about your event.....'></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                </div>
        
    
  )
}

export default ContactPage
