'use client'

import { TokenManager } from '@bitgouel/api';
import { RoleEnumTypes } from '@bitgouel/types';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { ReactElement, useEffect } from 'react';

const activityPageRoles: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_TEACHER',
  'ROLE_STUDENT'
]

const createPageRoles: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT'
]

const checkAccessCondition = (pathname: string, authority: RoleEnumTypes) => {
  if (pathname.includes('activity')) {
    if (!activityPageRoles.includes(authority)) {
      return false
    } else if (pathname.includes('write') && authority !== 'ROLE_STUDENT') {
      return false
    }
  } else if ((pathname === '/main/lecture/create' || pathname === `/main/post/create`) && !createPageRoles.includes(authority)) {
      return false
  } else if (pathname === `/main/post/notice/create` && authority === 'ROLE_ADMIN') {
      return false
  }
  return true
}

const PrivateRouter = ({ children }: { children: ReactElement }) => {
    const pathname = usePathname()
    const tokenManager = new TokenManager()
    useEffect(() => {
      if (!checkAccessCondition(pathname, tokenManager.authority ?? 'ROLE_ADMIN')) {
        return redirect(`/not-found`) // 임의로 redirect
      }
    }, [])

   return <>{ children }</>
};

export default PrivateRouter;