import { IPublicModelPluginContext } from '@alilc/lowcode-types';

export function PluginAppSubTopArea(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      skeleton.add({
        area: 'subTopArea',
        type: 'Widget',
        name: 'PluginAppSubTopArea',
        // props: {
        //   align: 'left',
        //   width: 800,
        // },
        index: -1,
        content: <h1>sub Top area</h1>,
        contentProps: {
          ctx,
        },
      });
    },
  };
}

PluginAppSubTopArea.pluginName = 'PluginAppSubTopArea';
