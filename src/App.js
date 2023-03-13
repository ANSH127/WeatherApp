import './App.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Rolling from './Rolling-1s-200px.svg'
function App() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let currentDate = `${monthNames[month-1]} ${day} ${year}`;
  // console.log(currentDate); // "17-6-2022"
  const [data, setdata] = useState([])
  const [city, setcity] = useState('')
  const [loader, setloader] = useState(false)

  const fetchdata = async (str) => {
    // console.log(str);
    let url = `https://api.api-ninjas.com/v1/weather?city=${str}`;
    let data = await fetch(url, {
      method: "GET",
      headers: { 'X-Api-Key': 'pCMVbtsAaBsocaIYAWXzjQ==QDy6oOihcaglPutb' },
      contentType: 'application/json',
      mode:'cors',
      
    });

    let parsedData = await data.json()
    if (Object.keys(parsedData).length > 1){

      setcity(str);
      // console.log(parsedData);
      setdata(parsedData);
      setloader(false)
    }
    else{
      alert('Enter Correct City name.')
      setloader(false);
      return false;
    }

  }
  useEffect(() => {
    fetchdata('delhi');
    setloader(true);


  }, [])

  const func = () => {
    let val = document.getElementById('city').value
    setloader(true);

    fetchdata(val);
  }
  return (
    <>
      <div className='flex justify-center flex-col'>

        <h1 className='text-center text-2xl mt-3 font-bold'>WeatherApp</h1>
        <div className='flex flex-row  mx-auto gap-2'>

          <input type="text" id='city' className='bg-black text-center text-white p-2 mt-4 ' defaultValue='delhi'  placeholder='Search City' />
          <button className='bg-blue-500 rounded p-2 mt-3 hover:bg-blue-800 hover:text-white' onClick={func} >Search</button>
        </div>
      </div>

      <div className='h-11'>

      { loader && <img src={Rolling} className='mx-auto mt-4' alt="" width='40px' />}
      </div>

      <Home element={data} city={city} date={currentDate} />
    </>

  );
}

export default App;
