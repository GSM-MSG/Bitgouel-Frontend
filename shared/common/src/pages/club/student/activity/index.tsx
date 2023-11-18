'use client'

import * as S from './style'
import Bg2 from '../../../../assets/png/mainBg2.png'
import { Plus } from '../../../../assets'
import { useRouter } from 'next/navigation'
import { ActivityItem } from '../../../../components'
import { ApproveStatusEnum } from '@bitgouel/api'

interface ActivityItemType {
  activityId: string
  title: string
  userId: string
  userName: string
  approveStatus: ApproveStatusEnum
}

const ActivityPage = () => {
  const router = useRouter()

  const activityList: ActivityItemType[] = [
    {
      activityId: '1',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
    {
      activityId: '2',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
    {
      activityId: '3',
      title:
        '국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.',
      userId: 'sdfsf',
      userName: '박주홍',
      approveStatus: 'APPROVED',
    },
  ]

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
          {activityList.map((activity) => (
            <ActivityItem item={activity} key={activity.activityId} />
          ))}
        </S.ActivityContainer>
      </S.ActivityWrapper>
    </div>
  )
}

export default ActivityPage
