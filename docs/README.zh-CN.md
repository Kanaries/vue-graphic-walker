# Vue Graphic Walker: 一个可以帮你快速构建数据交互式数据可视化应用的Vue组件

[English](https://github.com/Kanaries/vue-graphic-walker) | [简体中文](./docs/README.zh-CN.md)

![](https://img.shields.io/github/license/kanaries/vue-graphic-walker)
![](https://img.shields.io/npm/v/@kanaries/vue-graphic-walker)

`@kanaries/vue-graphic-walker`是一个可以帮你快速构建数据交互式数据可视化应用的Vue组件，你可以将它作为一个tableau的轻量级开源替代。它是[graphic-walker](https://github.com/Kanaries/graphic-walker)的Vue版本。

![graphic-walker-banner](https://user-images.githubusercontent.com/22167673/222895294-47ddd664-106e-45ff-a613-e7919522cb79.png)

## 使用

第一步：安转包
```bash
npm i --save @kanaries/vue-graphic-walker
```

第二步：在Vue中使用

### 作为组件使用

```vue
<script setup lang="ts">
import { VueGraphicWalker } from '@kanaries/vue-graphic-walker';
</script>

<template>
  <VueGraphicWalker />
</template>
```

### 作为hook使用

```vue
<script setup lang="ts">
import { useGraphicWalker } from './useGraphicWalker';
import { onMounted, ref } from 'vue';
const gw = ref<HTMLElement | null>(null);
onMounted(() => {
  const { render } = useGraphicWalker(gw)
  render();
})
</script>

<template>
  <div ref="gw"></div>
</template>
```

## 文档
<VueGraphicWalker /> 组件的参数与`graphic-walker`相同：

```ts
export interface IGWProps {
    dataSource?: IRow[];
    rawFields?: IMutField[];
    spec?: Specification;
    hideDataSourceConfig?: boolean;
    i18nLang?: string;
    i18nResources?: { [lang: string]: Record<string, string | any> };
    keepAlive?: boolean;
    /**
     * auto parse field key into a safe string. default is true
     */
    fieldKeyGuard?: boolean;
    /** @default "vega" */
    themeKey?: IThemeKey;
    dark?: IDarkMode;
    storeRef?: React.MutableRefObject<IGlobalStore | null>;
    toolbar?: {
        extra?: ToolbarItemProps[];
        exclude?: string[];
    };
}
```

+ [graphic-walker docs](https://docs.kanaries.net/graphic-walker)
+ [graphic-walker github](https://github.com/Kanaries/graphic-walker)