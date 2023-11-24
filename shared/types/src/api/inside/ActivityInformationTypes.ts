import { ApproveStatusEnum } from '../common'

interface ActivityInformationItem {
  activityId: string
  title: string
  userId: string
  activityDate: string
  userName: string
  approveStatus: ApproveStatusEnum
}

export interface ActivityInformationTypes {
  activities: {
    content: ActivityInformationItem[]
  }
}
