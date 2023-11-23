import { ActivityDetailPage } from '@/PageContainer'

const ActivityDetail = ({ params }: { params: { activity_id: string } }) => {
  return <ActivityDetailPage activity_id={params.activity_id} />
}

export default ActivityDetail
