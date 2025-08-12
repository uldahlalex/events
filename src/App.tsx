import {useState} from 'react'

export interface RegisterModel {
    email: string;
    password: string;
    repeatPassword: string;
}

function App() {
  const [registerModel, setregisterModel] = useState<RegisterModel>({
      email: '',
      password: '',
      repeatPassword: ''
  })


  return (
    <>
      <input type="email" value={registerModel.email} onChange={e => setregisterModel({...registerModel, email: e.target.value})} placeholder="email" />
      <input type="password" value={registerModel.password} onChange={e => setregisterModel({...registerModel, password: e.target.value})} placeholder="password" />
      <input type="password" value={registerModel.repeatPassword} onChange={e => setregisterModel({...registerModel, repeatPassword: e.target.value})} placeholder="repeat" />
        <button onClick={() => {
            if(registerModel.password.length < 6) {
                alert('too short pass')
                return;
            }
            if(registerModel.password != registerModel.repeatPassword) {
                alert("dont match")
                return;
            }
            alert('success')
        }}>register</button>
    </>
  )
}

export default App
