import Image from 'next/image'

export type imageWrapperProps = {
  src: string
  alt: string
  width: number
  height: number
}

const ImageWrapper = ({ src, alt, width, height }: imageWrapperProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />
}

export default ImageWrapper
