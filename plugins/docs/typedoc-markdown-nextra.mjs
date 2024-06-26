// @ts-check

import * as fs from 'fs';
import * as path from 'path';
import { MarkdownRendererEvent } from 'typedoc-plugin-markdown';
import { MarkdownNextraTheme } from './typedoc-markdown-theme.mjs';

/**
 * Local plugin to tweak TypeDoc output for nextra docs
*
*  @param {import("typedoc-plugin-markdown").MarkdownApplication} app
*/
export function load(app) {
  // set custom theme
  app.renderer.defineTheme('customTheme', MarkdownNextraTheme);

  app.renderer.on(
    MarkdownRendererEvent.END,
    writeMetaJsonFiles,
  );
}

/**
 * @param {import('typedoc-plugin-markdown').MarkdownRendererEvent} renderer
 */
function writeMetaJsonFiles(renderer) {
  const metaTree = {};
  
  renderer.urls?.forEach((url) => {
    buildMetaTree(metaTree, url.url);
  })

  for (const metaPath in metaTree) {
    writeMetaJsonFile(metaTree[metaPath], metaPath, renderer.outputDirectory)
  }
}

/**
 * @param {object} meta
 * @param {string} metaPath
 * @param {string} outputDirectory
 */
function writeMetaJsonFile (meta, metaPath = '', outputDirectory = '') {
  fs.mkdirSync(path.join(outputDirectory, metaPath), { recursive: true});

  fs.writeFileSync(
    path.join(outputDirectory, metaPath, '_meta.json'),
    JSON.stringify(meta, null, 2),
  );
}

/**
 * @param {object} metaTree 
 * @param {string} pagePath 
 */
function buildMetaTree(metaTree, pagePath) {
  const pathSplit = pagePath.split(path.sep);
  const pathFile = pathSplit.pop();
  const pathBase = path.join(...pathSplit);
  const pathFileName = pathFile?.split('.').shift() ?? '';
  
  if (pathFile && pathBase) {
    if (pathBase in metaTree) {
      metaTree[pathBase] = { ...metaTree[pathBase], [pathFileName]: pathFileName }
    } else {
      metaTree[pathBase] = {
        [pathFileName]: pathFileName,
      };
    }
  }
}
