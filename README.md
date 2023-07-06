# Vue Graphic Walker

![](https://img.shields.io/github/license/kanaries/vue-graphic-walker)
![](https://img.shields.io/npm/v/@kanaries/vue-graphic-walker)

`@kanaries/vue-graphic-walker` is a Vue component that allows you to create a [graphic walker](https://github.com/Kanaries/graphic-walker) (a lite opensource tableau alternative).

![graphic-walker-banner](https://user-images.githubusercontent.com/22167673/222895294-47ddd664-106e-45ff-a613-e7919522cb79.png)

## Usage

Step 1: install package
```bash
npm i --save @kanaries/vue-graphic-walker
```

Step 2: use component in vue.

### Use as component

```vue
<script setup lang="ts">
import { VueGraphicWalker } from '@kanaries/vue-graphic-walker';
</script>

<template>
  <VueGraphicWalker />
</template>
```

### use as hook

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

## Docs
props of <VueGraphicWalker /> component is same as graphic-walker:

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