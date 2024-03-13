import { ActivityDetailPage } from '@bitgouel/common/src/pages'
import { StudentIdProps } from '@bitgouel/types'

const ActivityDetail = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return (
    <ActivityDetailPage
      studentIdProps={params}
      activityId={params.activityId}
    />
  )
}

export default ActivityDetail
