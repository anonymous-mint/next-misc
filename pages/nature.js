import Image from "next/image";
import React from "react";
import img from '../public/2.jpg'

const Nature = () => {
  return (
		<div>
			<Image src={img} placeholder="blur" alt="nature"width="300" height="500"></Image>
      Nature
      {[1, 2, 3].map((img) => (
        <Image src={`/${img}.jpg`} alt="nature" key={img} width="300" height="500"></Image>
      ))}
    </div>
  );
};

export default Nature;
