import { ActivityDetailPage } from '@bitgouel/common/src/pages'
import { StudentIdProps } from '@bitgouel/types'

const ActivityDetail = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return (
    <ActivityDetailPage
      activityId={params.activityId}
      studentIdProps={{ clubId: params.clubId, studentId: params.studentId }}
    />
  )
}

export default ActivityDetail
