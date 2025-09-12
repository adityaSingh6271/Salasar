// app/projects/[slug]/page.jsx
import ExoticaII from "@/components/projects/ExoticaII";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  switch (slug) {
    case "exotica-ii":
      return <ExoticaII />;
      
    default:
      return <div>Project not found</div>;
  }
}    
