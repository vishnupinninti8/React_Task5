import React, { useEffect, useState } from 'react'

const Dateofbirth = () => {

  const [date, setDate] = useState('');

  const calculate = () => {
    var dob = document.getElementById('dob').value
    var diff_ms = Date.now() - new Date(dob).getTime();
    var age_dt = new Date(diff_ms);
    setDate(Math.abs(age_dt.getUTCFullYear() - 1970));
  }

  useEffect(() => {
    document.getElementById('dob').value = new Date().toISOString().substring(0, 10);
  }, []);

  return (
    <div className="container ">
      <div className="content shadow p-3 mb-5  rounded" style={{ margin: '150px 400px', width: '40%', backgroundColor: 'rgba(235, 223, 223, 0.961)' }}>
        <h1>Age Calculator</h1>
        <h3 style={{ padding: '20px' }}>Enter your date of birth</h3>
        <div className="content2" style={{ paddingBottom: '20px' }}>
          <input style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} type="date" id='dob' />
          <button className='btn btn-primary' onClick={calculate} >Calculate</button>
        </div>
        <h4>{(date === '' || date === 'NaN') ? '' : `You are ${date} years old`}</h4>
      </div>
    </div>
  )
}

export default Dateofbirth
