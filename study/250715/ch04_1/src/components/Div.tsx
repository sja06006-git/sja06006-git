import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { MinMaxWidthHeight } from './MinMaxWidthHeight'

export type ReactDivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & LeftRightTopBottom & MinMaxWidthHeight & {src?: string}

// prettier-ignore
export const Div: FC<DivProps> = ({
    width, height, minWidth, maxWidth, minHeight, maxHeight, style: _style, src, className: _className, left, right, top, bottom, ...props
}) => {
    const style = {..._style, width, height, minHeight, maxHeight, minWidth, maxWidth, backgroundImage: src && `url(${src})`, left, right, top, bottom}
    return <div {...props} className={_className} style={style} />
}