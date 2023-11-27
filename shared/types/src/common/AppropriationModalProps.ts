export interface AppropriationModalProps {
  type: string
  title: string | undefined
  onAppropriation: () => void
  onReject?: () => void
}
