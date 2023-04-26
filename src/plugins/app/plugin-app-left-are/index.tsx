import { IPublicModelPluginContext } from '@alilc/lowcode-types';

export function PluginAppLeftArea(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      skeleton.add({
        area: 'leftArea',
        type: 'Widget',
        name: 'PluginAppLeftArea',
        // props: {
        //   align: 'left',
        //   width: 800,
        // },
        index: -1,
        content: <h1>left area</h1>,
        contentProps: {
          ctx,
        },
      });
    },
  };
}

PluginAppLeftArea.pluginName = 'PluginAppLeftArea';
