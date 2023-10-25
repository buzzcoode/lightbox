import Image, { StaticImageData } from 'next/image'

interface ThumbProps {
  srcImage: StaticImageData
  onClick: () => void
}

export const ThumbImage = ({ srcImage, onClick }: ThumbProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full overflow-hidden rounded-md"
    >
      <Image
        src={srcImage}
        width={300}
        height={200}
        alt="Image"
        className="hover:scale-110 transition-all ease-linear cursor-pointer"
      />
    </button>
  )
}
