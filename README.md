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
Para conhecimento, foram mencionados alguns leitores de tela mais comuns utilizados e indicado o _Chromevox_ para ser utilizado no navegador _Chrome_ afin de testar a acessibilidade implementada no componente de estudo. Os outros leitores mencionados são _JAWS_, _NVDA_ e _VoiceOver_.

## 04. Lidando com o teclado

Implementação regras de navegação no componente de estudo via teclado, conforme normas da _WCAG_.
Visto regras de funcionamento do atributo _'tabindex'_ e sua relação com a navegação através da tecla tab. Em relação ao funcionamento do componente de estudo, o _'tabindex'_ foi configurado para permitir somente navegar para a opção selecionada e ignorar a opção não selecionada. Também foi necessário configurar a navegação para uma opção padrão, caso nenhuma estiver selecionada.
Para configurar a navegação através das teclas de seta, foram criados um conjunto de diretivas. Uma para representar o _'container'_ que contém uma lista de componentes representados pela segunda diretiva, de marcação, e tratará qual o próximo elemento a ser focado conforme a tecla pressionada. A diretiva de marcação, por sua vez, informa se o elemento a ela relacionado é o atual elemento ativo e também emite um evento para anunciar quando o elemento relacionado a ela recebe o foco.

## 05. Revisando o nosso componente

Visto as regras para a navegação através de componentes desabilitados, que devem ser ignorados. Implementação de alternar entre habilitado e desabilitado, tanto para campos em formulários reativos (_Reactive_), quanto para formulários guiados por modelo (_Template Driven_).
Ao final foi demostrado a importância de se trabalhar com os componentes nativos do _HTML_, já que os comportamentos de acessibilidade para estes componentes já são devidamente tratados, evitando a necessidade de ter que implementar manualmente alguns comportamentos como de navegação por teclado e a definição de _roles_.

## §

- _Web Content Accessibility Guidelines (WCAG): 'https://www.w3.org/WAI/standards-guidelines/wcag'_
