import { DECK_RE } from '@/tools/decklists/constants';
import { parseCards } from '@/tools/decklists/parseCards';
import { parseHeader } from '@/tools/decklists/parseHeader';
import type { Decklist } from '@/tools/decklists/types';

/**
 * Parse a deck as string and return all cards with their corresponding amount
 * split between main and sideboard.
 * Each card is represented as a tuple [quantity, name].
 */
export const parse = (buffer: string): Decklist => {
  const [, header = '', main = '', side = ''] =
    buffer.match(DECK_RE.decklist) || [];
  const { authors, colors, title } = parseHeader(header);
  return {
    authors: authors ?? null,
    colors: colors ?? null,
    main: parseCards(main) ?? null,
    side: parseCards(side) ?? null,
    title: title ?? null,
  };
};
