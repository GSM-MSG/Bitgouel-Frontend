'use client'

import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { Plus } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { ActivityItem } from '@bitgouel/common/src/components'
import { ApproveStatusEnum } from '@bitgouel/types'
import { useGetActivityInformationList } from '@bitgouel/api'

interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  activityDate: string
  userName: string
  approveStatus: ApproveStatusEnum
}

const ActivityListPage = () => {
  const router = useRouter()

  const { data } = useGetActivityInformationList({
    page: 1,
    size: 10,
  })

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 활동</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton
              onClick={() => router.push('/main/club/student/activity/create')}
            >
              <Plus />
              <span>활동 추가</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>

      <S.ActivityWrapper>
        <S.ActivityContainer>
          {data?.data.activities.content.map((activity) => (
            <ActivityItem item={activity} key={activity.activityId} />
          ))}
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityListPage
