import * as md from 'marked';

export class MarkdownValueConverter {
    toView(str: string) {
        return str && md(str, {
            renderer:    new md.Renderer(),
            gfm:         true,
            tables:      true,
            breaks:      false,
            pedantic:    false,
            sanitize:    true,
            smartLists:  true,
            smartypants: false
        });
    }
}