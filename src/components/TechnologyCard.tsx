import Image from "next/image";
import { useState } from "react";

interface TechnologyCardProps {
  title: string;
  iconPath: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, iconPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - rect.left - 40}px`;
    const y = `${e.clientY - rect.top - 40}px`;

    e.currentTarget.style.setProperty("--glow-x", x);
    e.currentTarget.style.setProperty("--glow-y", y);
  };

  return (
    <div
      className="glow-container "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cursor-following glow */}
      {isHovered && <div className="glow-effect"></div>}

      {/* Icon */}
      <Image src={iconPath} alt={title} width={400} height={400} className="icon" />

      {/* Title */}
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default TechnologyCard;
