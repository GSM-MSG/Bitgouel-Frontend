import { ApproveStatusEnum } from '../common'

interface ActivityInformationItem {
  activityId: string
  title: string
  userId: string
  activityDate: string
  userName: string
}

export interface ActivityInformationTypes {
  activities: {
    content: ActivityInformationItem[]
  }
}
