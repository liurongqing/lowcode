import { IPublicModelPluginContext } from '@alilc/lowcode-types';

export function PluginAppTopArea(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'PluginAppTopArea',
        props: {
          align: 'left',
          width: 800,
        },
        index: -1,
        content: <h1>Top</h1>,
        contentProps: {
          ctx,
        },
      });
    },
  };
}

PluginAppTopArea.pluginName = 'PluginAppTopArea';
