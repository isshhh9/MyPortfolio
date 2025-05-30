import { useState } from "react"
import {cn} from '@/lib/utils'

const skills = [
  // FRONTEND
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // MACHINE LEARNING
  { name: "OpenCV", level: 90, category: "machine learning" },
  { name: "TensorFlow", level: 85, category: "machine learning" },
  { name: "Matplotlib", level: 75, category: "machine learning" },
  { name: "Scikit-Learn", level: 70, category: "machine learning" },
  { name: "PyTorch", level: 80, category: "machine learning" },
  { name: "Pandas", level: 95, category: "machine learning" },
  { name: "Numpy", level: 95, category: "machine learning" },

  // TOOLS
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Linux", level: 85, category: "tools" },
  { name: "ROS (Robot Operating System)", level: 75, category: "tools" },

  // LANGUAGES
  { name: "C++", level: 95, category: "languages" },
  { name: "Python", level: 90, category: "languages" },
  { name: "SQL", level: 90, category: "languages" },

  // { name: "C++", level: 95, category: "" }, // commented out
];

const categories = ["ALL", "FRONTEND", "MACHINE LEARNING", "TOOLS", "LANGUAGES"]

export const SkillsSection = () =>{
    const[activeCategory, setActiveCategory] = useState("ALL");

    const filteredSkills = skills.filter(
  (skill) => activeCategory === "ALL" || skill.category.toLowerCase() === activeCategory.toLowerCase()
);

    return(
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      My <span className="text-primary">SkillSet</span>
    </h2>
{/* this section is for buttons appearance */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category,key) =>(
            <button key = {key} 
            onClick={() => setActiveCategory(category)}
            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory=== category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
            )}>
                {category}
            </button>
        )
        )}
    </div>
{/* here we define the lanuages and the percentage */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
        <div key={key}>
            <div className="bg-card p-6 rounded-large shadow-xs card-hover">
            <h3 className="text-right mb-4">{skill.name}</h3>

            {/* Progress bar */}
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mt-4">
                <div
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: skill.level + "%" }}
                />
            </div>

            {/* Percentage below bar */}
            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                {skill.level}%
                </span>
            </div>
            </div>
        </div>
        ))}
    </div>
  </div>
</section>
)
}