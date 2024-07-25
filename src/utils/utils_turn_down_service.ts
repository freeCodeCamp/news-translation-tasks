import TurndownService from "turndown";
import { gfm, strikethrough, tables, taskListItems } from 'turndown-plugin-gfm';

const Empty_HREF = /^(#|javascript:\s*void\(0\);?\s*)$/;

export const turndownService = new TurndownService({
    hr: '---',
    linkStyle: 'referenced',
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced'
  })
    .use(strikethrough)
    .use(tables)
    .use(taskListItems)
    .use(gfm)
    .addRule('non_url', {
      filter: (node) =>
        ['a', 'area'].includes(node.nodeName.toLowerCase()) &&
        Empty_HREF.test(node.getAttribute('href') || ''),
      replacement: () => ''
    })
    .addRule('img-srcset', {
      filter: ['img'],
      replacement(_, { alt, title, src, srcset }: HTMLImageElement) {
        const [firstSet] = srcset.split(',')[0]?.split(/\s+/) || [];
  
        const content = [src || firstSet, title && JSON.stringify(title)].filter(
          Boolean
        );
        return `![${alt}](${content.join(' ')})`;
      }
    })
    .addRule('source-srcset', {
      filter: ['picture'],
      replacement(_, node: HTMLPictureElement) {
        const { src, alt, title } = node.querySelector('img') || {};
  
        const sourceList = Array.from(
          node.querySelectorAll('source'),
          ({ sizes, srcset }) => {
            const size = Math.max(
              ...sizes
                .split(/,|\)/)
                .map((pixel) => parseFloat(pixel.trim()))
                .filter(Boolean)
            );
            const [src] = srcset.split(',')[0]?.split(/\s+/) || [];
  
            return { size, src };
          }
        );
        const sources = sourceList.sort(({ size: a }, { size: b }) => b - a);
  
        const content = [
          src || sources[0]?.src,
          title && JSON.stringify(title)
        ].filter(Boolean);
  
        return `![${alt}](${content.join(' ')})`;
      }
    })
    .remove((node) =>
      node.matches('style, script, aside, form, [class*="ads" i]')
    )
    .keep((node) => node.matches('kbd, iframe, audio, video, source'));
  