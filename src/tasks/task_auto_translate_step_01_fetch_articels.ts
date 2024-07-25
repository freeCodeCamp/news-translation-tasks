import { join } from 'path';
import { main_options } from '..';
import { utils_web_fetch_to_mdfile } from '../utils/utils_web_fetch_to_mdfile';
import { utils_mdstr_extract_link } from '../utils/utils_web_get_route_addr';

export async function task_auto_translate_step_01_fetch_articels(options: main_options) {
    const { with_issue_body } = options;
    // We recommend pulling only one article at a time, but in reality, the program still supports pulling multiple articles at once.
    const arr_str_article_urls = with_issue_body.split('\n')
        .filter((line) => line.trim() !== '')
        .map(utils_mdstr_extract_link);
    // `for` loop can easily to use `await` to fetch articles one by one
    for (const str_article_url of arr_str_article_urls) {
        // Fetch the article content
        const utils_web_fetch_to_mdfile_options = {
            str_url: str_article_url,
            str_mdfile_to_save_name: undefined,
            str_mdfile_to_save_dir: options.with_task_fetch_to_save_path,
            str_webpage_include_selector: options.with_task_fetch_to_include_selector,
            str_webpage_ignore_Selector: options.with_task_fetch_to_ignore_selector
        };
        const meta = await utils_web_fetch_to_mdfile(utils_web_fetch_to_mdfile_options);
        const { str_mdfile_to_save_name } = utils_web_fetch_to_mdfile_options;
        console.log('meta:', meta);
        console.log('str_mdfile_to_save_name:', str_mdfile_to_save_name);
        const str_mdfile = join(options.with_task_fetch_to_save_path, str_mdfile_to_save_name);
        options.step_01_result_mdfiles.push(str_mdfile);
        options.step_01_result_metas.push(meta);
    }
}