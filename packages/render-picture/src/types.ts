export interface PictureProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  lazyload?: boolean;
  placeholder?: string;
}
