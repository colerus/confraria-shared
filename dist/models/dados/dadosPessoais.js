"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const telefoneError_1 = tslib_1.__importDefault(require("../../exceptions/telefoneError"));
const data_1 = require("../../utils/data");
const dadosPessoaisError_1 = tslib_1.__importDefault(require("../../exceptions/dadosPessoaisError"));
const telefone_1 = require("../../utils/telefone");
const id_1 = tslib_1.__importDefault(require("../id"));
class DadosPessoais extends id_1.default {
    constructor(dados) {
        super(dados);
        this.nome = dados.nome;
        this.sobrenome = dados.sobrenome;
        this.dataNascimento = dados.dataNascimento;
        this.enderecos = dados.enderecos;
        this.telefones = dados.telefones;
        this.emails = dados.emails;
        this.perfil = dados.perfil;
    }
    alterarId(id) {
        if (this.id === undefined) {
            this.id = id;
        }
    }
    alterarNome(nome) {
        this.nome = nome;
    }
    alterarSobrenome(sobrenome) {
        this.sobrenome = sobrenome;
    }
    alterarDataNascimento(dataNascimento) {
        const idade = data_1.calcularIdade(dataNascimento);
        if (idade < 18) {
            throw new dadosPessoaisError_1.default("Deve ter pelo menos 18 anos");
        }
        this.dataNascimento = dataNascimento;
    }
    adicionarTelefone(telefone) {
        const novo = telefone_1.converterParaTelefone(telefone);
        if (!novo.isValido()) {
            throw new telefoneError_1.default("Telefone Inválido");
        }
        this.telefones.push(novo);
    }
    removerEndereco(endereco) {
        const index = this.enderecos.indexOf(endereco);
        if (index >= 0) {
            this.enderecos.splice(index, 1);
        }
    }
    removerTelefone(telefone) {
        const index = this.telefones.indexOf(telefone);
        if (index >= 0) {
            this.telefones.splice(index, 1);
        }
    }
    removerEmail(email) {
        if (this.emails === undefined) {
            return;
        }
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    obterId() {
        return this.id;
    }
    obterNome() {
        return this.nome;
    }
    obterSobrenome() {
        return this.sobrenome;
    }
    obterDataNascimento() {
        return this.dataNascimento;
    }
    obterEnderecos() {
        return this.enderecos;
    }
    obterTelefones() {
        return this.telefones;
    }
    obterEmails() {
        return this.emails;
    }
    isValido() {
        return (this.isNomeCompletoValido() &&
            this.isDataNascimentoValida() &&
            this.isEmailsValidos() &&
            this.isEnderecosValidos() &&
            this.isTelefonesValidos());
    }
    isNomeValido() {
        return this.nome.length > 0;
    }
    isSobrenomeValido() {
        return this.sobrenome.length > 0;
    }
    isNomeCompletoValido() {
        return this.isNomeValido && this.isSobrenomeValido();
    }
    isDataNascimentoValida() {
        return data_1.calcularIdade(this.obterDataNascimento()) >= 18;
    }
    isEmailsValidos() {
        return this.emails
            ? this.emails.every((current) => current.isValido())
            : false;
    }
    isEnderecosValidos() {
        return this.enderecos
            ? this.enderecos.every((current) => current.isValido())
            : false;
    }
    isTelefonesValidos() {
        return this.telefones
            ? this.telefones.every((current) => current.isValido())
            : false;
    }
}
exports.default = DadosPessoais;
//# sourceMappingURL=dadosPessoais.js.map