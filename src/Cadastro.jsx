
import React, { useState } from "react";

import {
    HeartHandshake,
    UserRound,
    Phone,
    Mail,
    ArrowLeft,
    Info,
    CheckCircle2
} from "lucide-react";

function Cadastro({ onVoltarLogin }) {

    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: ""
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

    function cadastrar(event) {
        event.preventDefault();

        if (!form.nome.trim()) {
            setMensagem("Informe o nome completo para continuar.");
            return;
        }

        setMensagem(
            `Cadastro preenchido para ${form.nome}. Ainda falta conectar ao servidor para salvar os dados.`
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
                    onClick={onVoltarLogin}
                >
                    <ArrowLeft size={16} />
                    Voltar para login
                </button>

            </header>

            <section className="conteudo">

                <div className="texto-lateral">

                    <span className="etiqueta">
                        CADASTRO DE BENEFICIÁRIO
                    </span>

                    <h1>
                        Vamos começar
                        <br />
                        com seus dados.
                    </h1>

                    <p>
                        Queremos organizar o atendimento e facilitar
                        o acompanhamento das roupas recebidas pela
                        Lavanderia Solidária.
                    </p>

                    <div className="mensagem-ajuda">
                        <HeartHandshake size={21} />

                        <span>
                            Um atendimento acolhedor começa com
                            uma informação bem registrada.
                        </span>
                    </div>

                </div>

                <section className="cartao">

                    <div className="cabecalho-cartao">

                        <div className="icone-titulo">
                            <UserRound size={22} />
                        </div>

                        <div>
                            <h2>Seus dados</h2>
                            <p>Preencha as informações abaixo.</p>
                        </div>

                    </div>

                    <form onSubmit={cadastrar}>

                        <div className="campo">

                            <label htmlFor="nome">
                                Nome completo <span>*</span>
                            </label>

                            <div className="entrada">
                                <UserRound size={18} />

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    value={form.nome}
                                    onChange={atualizarCampo}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                        </div>

                        <div className="campo">

                            <label htmlFor="telefone">
                                Telefone
                            </label>

                            <div className="entrada">
                                <Phone size={18} />

                                <input
                                    id="telefone"
                                    name="telefone"
                                    type="tel"
                                    placeholder="(00) 00000-0000"
                                    value={form.telefone}
                                    onChange={atualizarCampo}
                                    autoComplete="tel"
                                />
                            </div>

                        </div>

                        <div className="campo">

                            <label htmlFor="email">
                                E-mail <small>(opcional)</small>
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
                                    autoComplete="email"
                                />
                            </div>

                        </div>

                        <div className="aviso-privacidade">

                            <Info size={17} />

                            <p>
                                Solicitamos apenas informações para
                                organizar o atendimento. Seus dados
                                devem ser protegidos e utilizados
                                conforme as regras de privacidade.
                            </p>

                        </div>

                        {mensagem && (
                            <div className="retorno" role="status">

                                <CheckCircle2 size={18} />

                                <span>{mensagem}</span>

                            </div>
                        )}

                        <button
                            className="botao-cadastrar"
                            type="submit"
                        >
                            Cadastrar beneficiário
                        </button>

                        <p className="obrigatorio">
                            <span>*</span> Campo obrigatório
                        </p>

                    </form>

                </section>

            </section>

            <footer>
                Lavanderia Solidária · Cuidado, respeito e comunidade.
            </footer>

        </main>
    );
}

export default Cadastro;

