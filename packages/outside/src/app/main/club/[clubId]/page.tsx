import { ClubDetailPage } from '@bitgouel/common/src/pages'

const ClubDetail = ({ params }: { params: { clubId: string } }) => {
  return <ClubDetailPage clubId={params.clubId} isAdmin={true} />
}

export default ClubDetail
