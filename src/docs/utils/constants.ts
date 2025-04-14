import * as availableIcons from '../../assets/icons';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from './functions';
import { COMMON_COLORS, LIGHT_THEME } from '../../theme/constants/color';
import { FONT_SIZE } from '../../theme/constants/fontSize';
import { FONT_WEIGHT } from '../../theme/constants/fontWeight';

const colorList = {
  ...COMMON_COLORS,
  ...LIGHT_THEME,
};

export const DOCS_ICON_OPTIONS = getEntryOptionsForSummary(availableIcons);
export const DOCS_FONT_SIZE_OPTIONS = getEntryOptionsForSummary(FONT_SIZE);
export const DOCS_FONT_WEIGHT_OPTIONS = getEntryOptionsForSummary(FONT_WEIGHT);

export const DOCS_COLOR_TYPES = formatKeyNamesForSummary(colorList);
export const DOCS_ICON_TYPES = formatKeyNamesForSummary(availableIcons);
export const DOCS_FONT_SIZE_TYPES = formatKeyNamesForSummary(FONT_SIZE);
export const DOCS_FONT_WEIGHT_TYPES = formatKeyNamesForSummary(FONT_WEIGHT);
