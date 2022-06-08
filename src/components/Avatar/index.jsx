import { AvatarImg } from "./styles"

export default function Avatar({hasBorder = true, src}) {
   return (
      <AvatarImg src={src} />
   );
}