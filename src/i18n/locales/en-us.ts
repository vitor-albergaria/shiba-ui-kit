export const en = {
  translation: {
    colors_title: 'Colors',
    colors_description:
      'This section presents the color palette used in the design system. Each color is defined by its hex code and is used to ensure a consistent and cohesive visual identity across the application.',

    icons_title: 'Icons',
    icons_description:
      'This section showcases the icons available in the design system. Icons are a crucial part of the UI, providing visual cues that enhance the user experience. Each icon is represented by an SVG path.',

    typography_title: 'Typography',
    typography_description:
      'In this documentation, font sizes are displayed in pixels for reference, but the actual values used are in `rem`.',
    typography_sample:
      'The Shiba Inu is a Spitz-type breed with a curled tail.',

    font_sizes_title: 'Font Sizes',
    font_sizes_description:
      "Font sizes are defined using the `rem` unit, where the base size is 1rem = 10px (based on a root font size of 62.5% of the browser's default size). This approach simplifies scaling and ensures consistency across the design.",

    font_family_title: 'Font Family',
    font_family_description:
      'The design system includes two font families: the default for primary text and an alternative for additional styles, ensuring a versatile typographic experience.',

    font_weight_title: 'Font Weight',
    font_weight_description:
      'Font weights are categorized to provide a range of typographic emphasis and hierarchy.',
    docs_toast: `

The \`ToastContainer\` component is used to display toast notifications in your application. 

## Configuration

Add the \`ToastContainer\` to your component:

\`\`\`jsx
import React from 'react';
import ToastContainer, { toast } from 'shiba-ui-kit';

function App() {
  return (
    <div>
      {/* Other components */}
      <ToastContainer />
    </div>
  );
}
  
export default App;
\`\`\`

## Usage

Use the toast functions to display messages:

\`\`\`jsx
import { toast } from 'shiba-ui-kit';

const toastSuccess = toast.success('Example message');
const toastError = toast.error('Example message');
const toastNeutral = toast.neutral('Example message');
const toastWarning = toast.warning('Example message');
\`\`\`

## Accepted Properties (\`IToast\`)

The properties that can be passed to the toast functions are:
  
- **message**:  Message to be displayed.
- **timeout**: Display time of the toast (in milliseconds).
- **background**: Background color of the toast.
- **messageColor**: Message color of the toast.
- **borderColor**: border color of the toast.
- **width:**: Width of the toast.
- **height**: Height of the toast.
- **borderRadius**: Border radius of the toast.

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
    settings_language: 'Language',
    settings_confirm: 'Confirm',
    settings_theme: 'Theme',
    docs_install_title: 'Installation',
    docs_install_description: 'To install the library, use npm or yarn:',
    docs_provider_title: 'Theme Provider Setup',
    docs_provider_description:
      'To use the components, wrap your application with the `ThemeProvider`:',
    docs_usage_title: 'Component Usage Example',
    docs_usage_description:
      'Import the component and use it in your application.',
    docs_theming_title: 'Using Custom Themes',
    docs_theming_description:
      'You can pass a custom theme through the customTheme property.',
    docs_theme_title: 'Choosing the Theme',
    docs_theme_description:
      'Choose between the default themes: light, dark, or ocean using the selectedTheme property.',
    docs_fonts_title: 'Overriding Fonts',
    docs_fonts_description:
      'To override fonts, in addition to setting the custom font, you will also need to edit the fontFamily token in the customTheme.',
    docs_styling_title: 'Using Theme in Custom Components',
    docs_styling_description_one:
      'To get started, install styled-components using npm or yarn:',
    docs_styling_description_two:
      'Once you have styled-components installed, use the useTheme hook to access the theme and pass it to your styled components:',
    docs_image:
      'Accepts a `string` to set the image source, which can be either a URL or a relative path to a local image.',
    docs_content: 'Accepts a `string` to set the text content.',
    docs_type_number: 'Accepts a `number` to specify the style.',
    docs_predefined:
      'Accepts predefined theme values or strings to define the style.',
    docs_hide: 'Accepts a `boolean` to hide the component.',
    docs_disabled: 'Accepts a `boolean` to set the component to disabled.',
    docs_loading: 'Accepts a `boolean` to set the component to loading.',
    docs_click: 'Aceita uma função para ser chamada ao clicar no componente.',
    docs_value: 'Accepts a `number` to set the value.',
    docs_header:
      'Accepts an array of objects with id, label, handleClick function, and optionally isInactive to disable an item.',
    docs_pie_chart_data:
      "Accepts an array of objects, each containing 'percent', 'color', 'label' and 'onClick' to define pie chart segments.",
    docs_full_width:
      'Accepts a `boolean` to determine if the component should occupy the full available space.',
    docs_string: 'Accepts a `string` to specify the style.',
    docs_rating:
      'Accepts a `number` to represent the current rating value, typically between 0 and `maxStars`.',
    docs_maxStars:
      'Accepts a `number` to set the maximum number of stars displayed for the rating.',
    docs_readonly:
      'Accepts a `boolean` to specify if the rating is read-only, preventing user interaction.',
    docs_timeline:
      'Accepts an array of objects with id, title, subtitle, and details (an array of strings).',
  },
};
