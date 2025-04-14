export const pt = {
  translation: {
    colors_title: 'Cores',
    colors_description:
      'Esta seção apresenta a paleta de cores utilizada no design system. Cada cor é definida pelo seu código hexadecimal e é usada para garantir uma identidade visual consistente e coesa em toda a aplicação.',

    icons_title: 'Ícones',
    icons_description:
      'Esta seção exibe os ícones disponíveis no design system. Os ícones são uma parte crucial da interface, fornecendo elementos visuais que melhoram a experiência do usuário. Cada ícone é representado por um caminho SVG.',

    typography_title: 'Tipografia',
    typography_description:
      'Nesta documentação, os tamanhos de fonte são exibidos em pixels como referência, mas os valores reais utilizados estão em `rem`.',
    typography_sample:
      'O Shiba Inu é uma raça do tipo Spitz com cauda enrolada.',

    font_sizes_title: 'Tamanhos de Fonte',
    font_sizes_description:
      'Os tamanhos de fonte são definidos usando a unidade `rem`, onde o tamanho base é 1rem = 10px (com base em um tamanho de fonte raiz de 62,5% do tamanho padrão do navegador). Essa abordagem simplifica a escalabilidade e garante consistência no design.',

    font_family_title: 'Família de Fontes',
    font_family_description:
      'O design system inclui duas famílias de fontes: a padrão para o texto principal e uma alternativa para estilos adicionais, garantindo uma experiência tipográfica versátil.',

    font_weight_title: 'Peso da Fonte',
    font_weight_description:
      'Os pesos das fontes são categorizados para fornecer uma variedade de ênfases tipográficas e hierarquia.',

    docs_icon_selection: 'Aceita nomes de ícones predefinidos para seleção.',
    docs_toast: `

O componente \`ToastContainer\` é utilizado para exibir notificações de toast na sua aplicação. 

## Configuração

Adicione o \`ToastContainer\` no seu componente:

\`\`\`jsx
import React from 'react';
import ToastContainer, { toast } from 'shiba-ui-kit';

function App() {
  return (
    <div>
      {/* Outros componentes */}
      <ToastContainer />
    </div>
  );
}
  
export default App;
\`\`\`

## Utilização

Utilize as funções de toast para exibir mensagens:

\`\`\`jsx
import { toast } from 'shiba-ui-kit';

const toastSuccess = toast.success('Mensagem de exemplo');
const toastError = toast.error('Mensagem de exemplo');
const toastNeutral = toast.neutral('Mensagem de exemplo');
const toastWarning = toast.warning('Mensagem de exemplo');
\`\`\`

## Propriedades Aceitas (\`IToast\`)

As propriedades que podem ser passadas para as funções de toast são:
  
- **message**:  Mensagem a ser exibida.
- **timeout**: Tempo de exibição do toast (em milissegundos).
- **background**: Cor de fundo do toast.
- **messageColor**: Cor da mensagem do toast.
- **borderColor**: Cor da borda do toast.
- **width:**: Largura do toast.
- **height**: Altura do toast.
- **borderRadius**: Borda arredondada do toast.

\`\`\`jsx
const customToast = toast.success('Mensagem de exemplo', {
  timeout: 5000,
  background: 'section',
  messageColor: 'secondary',
  borderColor: 'secondary',
  borderRadius: 'sm',
  height: 50,
  width: 500,
})
\`\`\`
`,

    settings_language: 'Idioma',
    settings_confirm: 'Confirmar',
    settings_theme: 'Tema',
    docs_install_title: 'Instalação',
    docs_install_description:
      'Para instalar a biblioteca, utilize npm ou yarn:',
    docs_provider_title: 'Configuração do Provider de Tema',
    docs_provider_description:
      'Para utilizar os componentes, envolva sua aplicação com o ThemeProvider:',
    docs_usage_title: 'Exemplo de Uso de Componente',
    docs_usage_description: 'Importe o componente e o use em sua aplicação.',
    docs_theming_title: 'Usando Temas Customizados',
    docs_theming_description:
      'Você pode passar um tema personalizado através da propriedade customTheme.',
    docs_theme_title: 'Escolhendo o Tema',
    docs_theme_description:
      'Escolha entre os temas padrão: light, dark ou ocean usando a propriedade selectedTheme.',
    docs_fonts_title: 'Sobrescrevendo Fontes',
    docs_fonts_description:
      'Para sobrescrever fontes, além de definir a fonte personalizada, você também precisará editar o token do fontFamily no customTheme.',
    docs_styling_title: 'Usando o Tema em Componentes Personalizados',
    docs_styling_description_one:
      'Para começar, instale o styled-components utilizando npm ou yarn:',
    docs_styling_description_two:
      'Após instalar o styled-components, use o hook useTheme para acessar o tema e passá-lo para seus componentes estilizados:',
    docs_image:
      'Aceita uma `string` para definir a fonte da imagem, que pode ser uma URL ou um caminho relativo para uma imagem local.',
    docs_content: 'Aceita uma `string` para definir o conteúdo do texto.',
    docs_type_number: 'Aceita um `number` para definir o estilo.',
    docs_predefined:
      'Aceita valores predefinidos no tema ou strings para definir o estilo.',
    docs_hide: 'Aceita um `boolean` para ocultar o componente.',
    docs_disabled:
      'Aceita um `boolean` para definir o componente como desativado.',
    docs_loading:
      'Aceita um `boolean` para definir o componente como carregando.',
    docs_click: 'Aceita uma função para ser chamada ao clicar no componente.',
    docs_value: 'Aceita um `number` para definir o valor.',
    docs_header:
      'Aceita um array de objetos com id, label, handleClick function, e opcionalmente isInactive para desativar um item.',
    docs_pie_chart_data:
      'Aceita um array de objetos, cada um contendo "percent", "color", "label" e "onClick" para definir segmentos de gráfico de pizza.',
    docs_full_width:
      'Aceita um `boolean` para determinar se o componente deve ocupar todo o espaço disponível.',
    docs_string: 'Aceita uma `string` para especificar o estilo.',
    docs_rating:
      'Aceita um `number` para representar o valor atual da avaliação, geralmente entre 0 e `maxStars`.',
    docs_maxStars:
      'Aceita um `number` para definir o número máximo de estrelas exibidas para a avaliação.',
    docs_readonly:
      'Aceita um `boolean` para especificar se a avaliação é de leitura, impedindo a interação do usuário.',
    docs_timeline:
      'Aceita um array de objetos com id, title, subtitle, e details (um array de strings).',
  },
};
