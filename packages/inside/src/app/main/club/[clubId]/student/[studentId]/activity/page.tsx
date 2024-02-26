import React from 'react'
import { ActivityListPage } from '@/PageContainer'
import { StudentIdProps } from '@bitgouel/types'

const ActivityList = ({ params }: { params: StudentIdProps }) => {
  return <ActivityListPage studentIdProps={params} />
}

export default ActivityList
