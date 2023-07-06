import { IGWProps, embedGraphicWalker } from "@kanaries/graphic-walker";
import { Ref } from "vue";

export function useGraphicWalker (el: Ref<HTMLElement>, props: IGWProps | undefined = {}) {
    const render = () => {
        if (el.value) {
            embedGraphicWalker(el.value, {
                ...props,
                keepAlive: props.keepAlive ?? true,
                themeKey: props.themeKey ?? 'g2'
            });
        }
    }
    return {
        render
    }
}