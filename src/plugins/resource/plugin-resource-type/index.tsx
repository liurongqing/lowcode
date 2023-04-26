import { CheckOutlined } from '@ant-design/icons';
import { PluginResourceTopArea } from '../plugin-resource-page';
import { IPublicModelPluginContext, IPublicTypeResourceType } from '@alilc/lowcode-types';
import { registerPlugins } from "../../../index";

export const pageView = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
      // 注册插件
      await registerPlugins();
      // await ctx.plugins.register(EditorInitPlugin);
      // await ctx.plugins.register(LogoSamplePlugin);
      // await ctx.plugins.register(ComponentPanelPlugin);
    },
  };
};

pageView.viewName = 'page';

export function PageResourceType(ctx: IPublicModelPluginContext, options: Object) {
  return {
    category: '页面',
    defaultViewType: 'page',
    defaultTitle: '这是资源页面',
    // defaultTitle: window.pageConfig.title,
    editorViews: [pageView],
    icon: <CheckOutlined />,

    async init() {
      await ctx.plugins.register(PluginResourceTopArea);
    },
  };
}

PageResourceType.resourceName = 'page';
PageResourceType.resourceType = 'editor' as 'editor' | 'webview';
