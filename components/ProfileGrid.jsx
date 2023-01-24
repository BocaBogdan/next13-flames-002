import Image from "next/image";

  export default function ProfileGrid ({images}) {
    return (
        <div className="grid-3">    
        {images.map((image, index) => (
        <figure key={index} className="grid-item grid-item-4x5">
              <Image src={image.url_full} height="50" width="50" alt="alt" />
          </figure>
             ))}
      </div>
    );
  }