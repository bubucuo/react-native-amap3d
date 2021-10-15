import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-amap3d' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type Amap3dProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'Amap3dView';

export const Amap3dView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<Amap3dProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
