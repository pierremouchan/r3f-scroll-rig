import React, { ReactNode } from 'react';
interface IGlobalCanvas extends Omit<any, 'children'> {
    children?: ReactNode | ((globalChildren: ReactNode) => ReactNode);
    as?: any;
    orthographic?: boolean;
    onError?: (props: any) => void;
    camera?: any;
    debug?: boolean;
    scaleMultiplier?: number;
    globalRender?: boolean;
    globalPriority?: number;
    globalClearDepth?: boolean;
}
export declare const GlobalCanvas: ({ children, onError, ...props }: IGlobalCanvas) => React.JSX.Element;
export {};
