declare module '*.scss'{
    interface IClassNames{
        [className:string]:string
    }
    const classNames:IClassNames;
    export =classNames
}

declare module '*.png';
declare module '*.ipg';
declare module '*.jpeg';

declare module '*.svg' {
// eslint-disable-next-line no-undef
const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
export default svg;
}

declare const __IS_DEV__:boolean;
