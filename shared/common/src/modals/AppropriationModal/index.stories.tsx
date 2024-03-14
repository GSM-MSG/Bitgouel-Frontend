'use client'

import AppropriationModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/RejectModal',
  component: AppropriationModal,
} as Meta<typeof AppropriationModal>

type Story = StoryObj<typeof AppropriationModal>

export const LectureRejectModal: Story = {
  args: {
    isApprove: true,
    title: '유저 리서치 - 사용자 경험 개선하기',
    question: '강의를 개설하시겠습니까?',
    purpose: '개설하기',
  },
}
