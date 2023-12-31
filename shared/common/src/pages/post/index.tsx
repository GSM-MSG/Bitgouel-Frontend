'use client'

import { MegaPhone, Plus, Question } from '../../assets/'
import { PostItem } from '../../components'
import Bg1 from '../../assets/png/mainBg1.png'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useGetPostList } from '@bitgouel/api'
import { useRecoilValue } from 'recoil'
import { Role } from '../../atoms'

const PostPage = () => {
  const { data } = useGetPostList({
    type: 'EMPLOYMENT',
    page: 0,
    size: 15,
  })
  const role = useRecoilValue(Role)

  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.PostTitle>게시글</S.PostTitle>
          <S.ButtonContainer>
            <S.PostButton onClick={() => push('/main/post/notification')}>
              <MegaPhone />
              <span>공지사항</span>
            </S.PostButton>
            <S.PostButton>
              <Question />
              <span>문의사항</span>
            </S.PostButton>
            {role === 'ROLE_ADMIN' ||
              role === 'ROLE_PROFESSOR' ||
              role === 'ROLE_COMPANY_INSTRUCTOR' ||
              (role === 'ROLE_GOVERNMENT' && (
                <S.PostButton onClick={() => push('/main/post/create')}>
                  <Plus />
                  <span>게시글 추가</span>
                </S.PostButton>
              ))}
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.PostListWrapper>
        <S.PostListContainer>
          {data?.data.posts.content.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </S.PostListContainer>
      </S.PostListWrapper>
    </div>
  )
}

export default PostPage
