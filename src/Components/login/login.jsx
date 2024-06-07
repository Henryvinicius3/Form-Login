import {FaUser, FaLock} from 'react-icons/fa'


import { useState } from "react";

import "./login.css"

const login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sentForm(event) {
        event.preventDefault();
        //caso tenha um banco de dados é so passar esses valores para ele//
        console.log(username, password);
        //caso tenha um banco de dados é so passar esses valores para ele//
    }

  return (
    <div className="container">
        <form onSubmit={sentForm}>
            <h1>Acesse o sistema</h1>
            <div className="input-type">
                <input type="email" placeholder='Email' 
                onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className='icon'></FaUser>
            </div> 
            <div className="input-type">
                <input type="password" placeholder='password' 
                onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'></FaLock>
            </div>

            <div className="recall">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>
            <div className="singin">
                <p>Não tem uma conta? <span>Registrar</span></p>
            </div>
        </form>
    </div>
  )
}

export default login
