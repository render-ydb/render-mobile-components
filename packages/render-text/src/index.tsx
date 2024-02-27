import { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextProps } from './types';
import './index.css';

const prefixCls = 'render-text-v1';
const Text: ForwardRefRenderFunction<HTMLSpanElement, TextProps> = (
  props,
  ref,
) => {
  const { className, style, numberOfLines = 1, children, ...rest } = props;
  const lines =
    typeof numberOfLines === 'string'
      ? parseInt(numberOfLines, 10)
      : numberOfLines;
  let textString = '';
  if (children != null) {
    textString = Array.isArray(children)
      ? children.join('')
      : children.toString();
  }
  const classNames = [prefixCls, className];
  if (lines) {
    classNames.push(`${prefixCls}--overflow-hidden`);
    if (lines === 1) {
      classNames.push(`${prefixCls}--singleline`);
    } else {
      classNames.push(`${prefixCls}--multiline`);
    }
  }
  const lineClamp = lines > 1 ? lines : undefined;
  return (
    <span
      className={classNames.join(' ')}
      style={{
        ...style,
        WebkitLineClamp: lineClamp,
        lineClamp: lineClamp,
      }}
      ref={ref}
      {...rest}
    >
      {textString}
    </span>
  );
};
Text.displayName = 'Text';
export default forwardRef(Text);
