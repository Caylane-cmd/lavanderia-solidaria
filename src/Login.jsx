
import React, { useState } from "react";

import {
    HeartHandshake,
    UserRound,
    Mail,
    LockKeyhole,
    Info,
    LogIn
} from "lucide-react";

function Login({ onIrCadastro }) {

    const [form, setForm] = useState({
        email: "",
        senha: ""
    });

    const [mensagem, setMensagem] = useState("");

    function atualizarCampo(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });

        setMensagem("");
    }

    function entrar(event) {
        event.preventDefault();

        if (!form.email.trim() || !form.senha.trim()) {
            setMensagem("Preencha o e-mail e a senha para continuar.");
            return;
        }

        setMensagem(
            "Dados preenchidos! Ainda falta conectar a autenticação ao servidor."
        );
    }

    return (
        <main className="pagina">

            <header className="topo">

                <div className="marca">
                    <span className="marca-icone">
                        <HeartHandshake size={25} />
                    </span>

                    <span>
                        <strong>Lavanderia Solidária</strong>
                        <small>Cuidado que transforma</small>
                    </span>
                </div>

                <button
                    className="voltar"
                    type="button"
                    onClick={onIrCadastro}
                >
                    Criar cadastro
                </button>

            </header>

            <section className="conteudo">

                <div className="texto-lateral">

                    <span className="etiqueta">
                        ACESSO À PLATAFORMA
                    </span>

                    <h1>
                        Bem-vindo(a)
                        <br />
                        de volta.
                    </h1>

                    <p>
                        Acesse sua conta para acompanhar os
                        atendimentos e fazer parte da nossa
                        rede de cuidado e solidariedade.
                    </p>

                    <div className="mensagem-ajuda">
                        <HeartHandshake size={21} />

                        <span>
                            Cuidar das pessoas também é facilitar
                            o acesso a um atendimento digno.
                        </span>
                    </div>

                </div>

                <section className="cartao">

                    <div className="cabecalho-cartao">

                        <div className="icone-titulo">
                            <LogIn size={22} />
                        </div>

                        <div>
                            <h2>Entre na sua conta</h2>
                            <p>Informe seus dados de acesso.</p>
                        </div>

                    </div>

                    <form onSubmit={entrar}>

                        <div className="campo">

                            <label htmlFor="email">
                                E-mail
                            </label>

                            <div className="entrada">
                                <Mail size={18} />

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="seuemail@exemplo.com"
                                    value={form.email}
                                    onChange={atualizarCampo}
                                    autoComplete="username"
                                    required
                                />
                            </div>

                        </div>

                        <div className="campo">

                            <label htmlFor="senha">
                                Senha
                            </label>

                            <div className="entrada">
                                <LockKeyhole size={18} />

                                <input
                                    id="senha"
                                    name="senha"
                                    type="password"
                                    placeholder="Digite sua senha"
                                    value={form.senha}
                                    onChange={atualizarCampo}
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                        </div>

                        <div className="aviso-privacidade">
                            <Info size={17} />

                            <p>
                                Seus dados de acesso devem ser
                                mantidos em segurança.
                            </p>
                        </div>

                        {mensagem && (
                            <div className="retorno" role="status">

                                <Info size={18} />

                                <span>{mensagem}</span>

                            </div>
                        )}

                        <button
                            className="botao-cadastrar"
                            type="submit"
                        >
                            Entrar
                        </button>

                        <p className="obrigatorio">
                            Ainda não possui cadastro?
                        </p>

                        <button
                            className="voltar"
                            type="button"
                            onClick={onIrCadastro}
                        >
                            Cadastrar beneficiário
                        </button>

                    </form>

                </section>

            </section>

            <footer>
                Lavanderia Solidária · Cuidado, respeito e comunidade.
            </footer>

        </main>
    );
}

export default Login;
