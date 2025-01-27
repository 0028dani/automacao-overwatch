import Overwatch from "../pageobjects/overwatchPage";

const overwatch = new Overwatch

Given(/^que estou no site do Overwatch$/, () => {
	overwatch.AcessarURL();
});

When(/^clicar no botao comunidade$/, () => {
	overwatch.BotaoComunidade();
});

When(/^preencher o nome (.*) do jogador$/, (nome) => {
	overwatch.BotaoPesquisar(nome);
});


Then(/^apresentara a lista de nomes$/, () => {
	overwatch.BotaoBuscar()
});
