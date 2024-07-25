import { outputFile } from "fs-extra";
import { parseHTML } from "linkedom";
import { join } from "path";
import { stringify } from 'yaml';
import { turndownService } from "./utils_turn_down_service";

const selectorOf = (tag: string) => `${tag}, [class*="${tag}" i]`;

function HTMLtoMarkdown(document: Document, ignoreSelector = '') {
    const title =
        document.querySelector('h1')?.textContent?.trim() ||
        document.title.trim(),
        time = document.querySelector<HTMLTimeElement>(
            'time, [class*="time" i], [class*="date" i]'
        ),
        author = document.querySelector<HTMLAnchorElement>(
            'a[class*="author" i], [class*="author" i] a'
        );
    const dateTime = new Date(time?.getAttribute('datetime') || ''),
        dateText = new Date(time?.textContent?.trim() || '');

    time?.remove();

    var content = '';

    for (const selector of ['article', 'content', 'main', 'body']) {
        const box = document.querySelector(selectorOf(selector));

        if (box) {
            if (ignoreSelector)
                turndownService.remove((node) => node.matches(ignoreSelector));

            content = turndownService.turndown(box.innerHTML);
            break;
        }
    }

    return {
        meta: {
            title,
            date: new Date(
                +dateTime ? dateTime : +dateText ? dateText : Date.now()
            ).toJSON(),
            author: author?.textContent?.trim(),
            authorURL: author?.href ? new URL(author.href, document.baseURI) + '' : ''
        },
        content
    };
}

export class utils_web_fetch_to_mdfile_options {
    str_url: string;
    str_mdfile_to_save_name: string;
    str_mdfile_to_save_dir: string;
    str_webpage_include_selector: string;
    str_webpage_ignore_Selector: string;
}
export async function utils_web_fetch_to_mdfile(
    options: utils_web_fetch_to_mdfile_options
) {
    const {
        str_url,
        str_mdfile_to_save_name,
        str_mdfile_to_save_dir,
        str_webpage_include_selector,
        str_webpage_ignore_Selector
    } = options;
    // Use some lagecy code to fetch the webpage
    const window = parseHTML(await (await fetch(str_url)).text());
    Object.defineProperty(window.document, 'baseURI', {
        value: str_url,
        writable: false
    });

    const { document } = window;
    if (str_webpage_include_selector) {
        const includeElement = document.querySelectorAll(str_webpage_include_selector);
        if (includeElement) {
            document.body.innerHTML = '';
            document.body.append(...includeElement);
        }
    }
    // Use some lagecy code to fetch the webpage
    const { meta, content } = HTMLtoMarkdown(document, str_webpage_ignore_Selector);

    const article_meta = { ...meta, OriginalURL: str_url, Proofreader: '' };
    const str_article_meta = stringify(article_meta);
    const text_article = `---\r\n${str_article_meta}\r\n---\r\n\r\n${content.replace('\n\n', '\n\n<!-- more -->\n\n')}`;

    // Compute the filename to save
    options.str_mdfile_to_save_name = str_mdfile_to_save_name || str_url.split('/').filter(Boolean).at(-1) + '.md';
    const str_mdfile_to_save_filename = join(str_mdfile_to_save_dir, options.str_mdfile_to_save_name);

    // If the file already exists, program will overwrite it.
    await outputFile(str_mdfile_to_save_filename, text_article);

    return meta;
}
