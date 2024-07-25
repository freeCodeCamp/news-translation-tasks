import { parseHTML } from 'linkedom';
import { marked } from 'marked';

export function utils_mdstr_extract_link(markdown:string) {
    const IndexHTML = /index\.\w+$/i;       // Regex to match filenames starting with "index."
    const html = marked(markdown);          // Convert Markdown to HTML
    const { document } = parseHTML(html);   // Parse the generated HTML document
    // Find the first <a> tag and get its href attribute, default to an empty string if not found
    const { href } = document.querySelector('a') || { href: '' };
    
    if (!href) { return ''; }   // If href is empty, return an empty string
    
    const URI = new URL(href);  // Create a URL object
    // Remove the "index" filename part from the pathname
    URI.pathname = URI.pathname.replace(IndexHTML, '');
  
    return URI + '';            // Return the modified URL string
  }