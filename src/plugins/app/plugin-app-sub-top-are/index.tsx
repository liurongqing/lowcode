import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Header } from './Header';

export function PluginAppSubTopArea(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      skeleton.add({
        area: 'subTopArea',
        type: 'Widget',
        name: 'PluginAppSubTopArea',
        content: Header,
        contentProps: {
          ctx,
        },
      });
    },
  };
}

PluginAppSubTopArea.pluginName = 'PluginAppSubTopArea';
