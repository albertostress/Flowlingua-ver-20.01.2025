import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

function ButtonDemo() {
  return (
    <Button variant="link">
      <ChevronLeft className="me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Go back
    </Button>
  )
}

export { ButtonDemo }
