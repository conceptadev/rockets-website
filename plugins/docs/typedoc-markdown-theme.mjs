import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeContext,
} from 'typedoc-plugin-markdown';

export class MarkdownNextraTheme extends MarkdownTheme {
  /**
   * @param {MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MarkdownNextraThemeContext(this, page, this.application.options);
  }
}

export class MarkdownNextraThemeContext extends MarkdownThemeContext {
  // customise partials
  partials = {
    ...this.partials,
    typeAndParent: typeAndParentFactory(this),
  };
}

/**
 * @param {MarkdownThemeContext} themeContext
 * @returns {(model) => string}
 */
function typeAndParentFactory (themeContext) {
  const origTypeAndParent = themeContext.partials.typeAndParent;
  /**
   * @param {import("typedoc").ReferenceType | import("typedoc").ArrayType} model
   * @returns string
   */
  return (model) => {
    const s = origTypeAndParent(model);
    return s.replace(/[\s\n]+/g, ' ');
  }
}