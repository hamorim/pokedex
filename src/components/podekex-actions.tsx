import ExportButton from "@/components/button/export";
import ShareButton from "@/components/button/share";
import LayoutButton from "@/components/button/layout";
import GraphButton from "@/components/button/graph";

export default function PokedexActions() {
  return (
    <div className="flex space-x-1 mr-10">
      <ExportButton />
      <GraphButton />
      <ShareButton />
      <LayoutButton />
    </div>
  )
}
