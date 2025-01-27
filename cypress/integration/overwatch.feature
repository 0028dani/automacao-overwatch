Feature: Overwatch

Scenario Outline: buscando jogadores
Given que estou no site do Overwatch
When clicar no botao comunidade
And preencher o nome <nome> do jogador
Then apresentara a lista de nomes
Examples:
    | nome                     |  
    | Elisa                    | 
    | Loki                     | 
    | Zahir                    | 


