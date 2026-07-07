import "./HeroStats.css";
import {
  Star,
  Code2,
  Layers3,
  Heart,
} from "lucide-react";
const stats = [
  {
    icon: <Star size={22} strokeWidth={2} />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <Code2 size={22} strokeWidth={2} />,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: <Layers3 size={22} strokeWidth={2} />,
    value: "10+",
    label: "Technologies",
  },
  {
    icon: <Heart size={22} strokeWidth={2} />,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {stats.map((item, index) => (
        <div
          className="hero-stat"
          key={index}
        >
          <div className="stat-icon">
            {item.icon}
          </div>

          <div className="stat-content">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}