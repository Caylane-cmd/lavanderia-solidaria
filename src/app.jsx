import React, { useState } from "react";

import "./App.css";

import Cadastro from "./Cadastro";
import Login from "./Login";

function App() {

    const [tela, setTela] = useState("login");

    return (
        <>
            {tela === "login" ? (

                <Login
                    onIrCadastro={() => setTela("cadastro")}
                />

            ) : (

                <Cadastro
                    onVoltarLogin={() => setTela("login")}
                />

            )}
        </>
    );
}

export default App;



