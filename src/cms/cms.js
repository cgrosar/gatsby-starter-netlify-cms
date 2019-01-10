import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePostPreview from './preview-templates/ArticlePostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('article', ArticlePostPreview)
