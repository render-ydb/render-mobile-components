import { forwardRef, ForwardRefRenderFunction } from 'react';
import Text from 'render-text';
import { LinkProps } from './types';

const Link: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  props,
  ref,
) => {
  const { className, style = {}, children, ...rest } = props;
  const textStyle = {
    color: style.color,
    fontSize: style.fontSize,
    fontStyle: style.fontStyle,
    fontWeight: style.fontWeight,
    textDecoration: style.textDecoration || 'none',
    textAlign: style.textAlign,
    fontFamily: style.fontFamily,
    textOverflow: style.textOverflow,
  };
  return (
    <a {...rest} ref={ref} className={className} style={style}>
      {typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
    </a>
  );
};

Link.displayName = 'Link';
export default forwardRef(Link);
