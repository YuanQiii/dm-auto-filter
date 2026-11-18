import type { PageMetaDatum } from '@uni-helper/vite-plugin-uni-pages'
import { pages } from '@/pages.json'

/**
 * 首页路径，通过 pages.json 里面 type 为 home 的页面获取，如果没有，则默认是第一个页面
 * 通常为 /pages/index/index
 *
 * 单独成文件的原因：tabbar/store.ts 在模块初始化阶段就要读取 HOME_PAGE。
 * 若留在 utils/index.ts，而 utils/index.ts 又反向引入 tabbar/store.ts，
 * 就会形成循环依赖，导致 HOME_PAGE 尚未初始化就被访问（TDZ）。
 */
export const HOME_PAGE = `/${(pages as PageMetaDatum[]).find(page => page.type === 'home')?.path || (pages as PageMetaDatum[])[0].path}`
