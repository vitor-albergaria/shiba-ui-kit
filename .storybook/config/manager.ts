import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';
import { DARK_THEME } from '../../src/theme/constants/color';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', '../../src/assets/images/favicon.ico');
document.head.appendChild(link);

addons.setConfig({
  theme: create({
    brandTitle: 'Shiba UI',
    brandImage: require('../../src/assets/images/logo.webp'),
    brandUrl: 'https://github.com/vitor-albergaria/shiba-ui-core',

    base: 'dark',
    appBg: DARK_THEME.background,
    textColor: DARK_THEME.content,
    appBorderColor: DARK_THEME.section,
    appBorderRadius: 4,

    barBg: DARK_THEME.section,
    barTextColor: DARK_THEME.content,
    barSelectedColor: DARK_THEME.content,
    barHoverColor: DARK_THEME.content,

    inputBg: DARK_THEME.section,
    inputBorder: DARK_THEME.section,
    inputTextColor: DARK_THEME.content,
    inputBorderRadius: 4,
  }),
});
