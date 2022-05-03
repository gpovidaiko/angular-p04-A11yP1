# A11yP1

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de uma aplicação com acessibilidade

## 01. Preparando o terreno, primeiro componente

Criação do componente _yes-no-button-group_, componente simples com duas opções de botão, cada qual com seu valor, que será utilizado como referência ao longo do módulo.

## 02. Integração com Reactive Forms

Alterações no componente _yes-no-button-group_ para possibilitar a integração com _Reactive Forms_. O componente implementa a interface _ControlValueAccessor_ e provê o _token_ _NG_VALUE_ACCESSOR_. Assim se torna possível integrar um componente particular à formulários reativos (_Reactive_) ou guiados por modelo (_Template Driven_).

## 03. Acessibilidade

Regras e boas práticas em acessibilidade podem ser encontradas na página da _WCAG_. Utilização de atributos _ARIA_ (_Accessible Rich Internet Applications_) para configuração do comportamento indicado para ferramentas de acessibilidade.
Foi utilizado o atributo _'role'_, recebendo valores como _'radiogroup'_ e _'radio'_ para garantir que ferramentas de acessibilidade interpretem a estrutura do componente _yes-no-button-group_ como tal. Os atributos _ARIA_ utilizados nesse momento foram _'aria-labelledby'_ recebendo o _id_ do rótulo que descreve a área alvo e o _'aria-checked'_ para indicar se um elemento, no caso os botões desempenhando papéis de _radio buttons_, se encontra selecionado ou não.
Para garantir a unicidade na definição dos _id's_ utilizados no componente, foi adicionada para utlização a biblioteca _uuid_, para auxiliar na geração de _id's_ únicos. E como boa prática, para diminuir o impacto que mudanças em pacotes externos podem causar na aplicação, é criada uma _service_ como interface de uso para a biblioteca _uuid_.

## §

- _Web Content Accessibility Guidelines (WCAG): 'https://www.w3.org/WAI/standards-guidelines/wcag'_
