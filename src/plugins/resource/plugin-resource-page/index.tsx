import { IPublicModelPluginContext } from '@alilc/lowcode-types';

export function PluginResourceTopArea(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'PluginResourceTopArea',
        props: {
          align: 'left',
          width: 800,
        },
        index: -1,
        content: <h1>resource Top</h1>,
        contentProps: {
          ctx,
        },
      });
    },
  };
}

PluginResourceTopArea.pluginName = 'PluginResourceTopArea';
