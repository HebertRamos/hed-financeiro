function Conta(){
	this.valor;
	this.descricao;
	this.pagamentos = [];
}

Conta.prototype.addPagamento = function(pagamento){
	this.pagamentos.push(pagamento);
};

Conta.prototype.getTotalPagamentos = function(){
	var totalPagamentos = 0;
	this.pagamentos.forEach(function(pagamento){
		totalPagamentos += pagamento.valor;
	});
	return totalPagamentos;
};

Conta.prototype.getRestanteAPagar = function(){

	var pagamentos = this.getTotalPagamentos();
	return (this.valor > pagamentos ? this.valor - pagamentos : 0);
};