import { SVGProps } from 'react'

const Filter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='1.5rem'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H18C18.5523 7.5 19 7.94772 19 8.5C19 9.05228 18.5523 9.5 18 9.5H6C5.44772 9.5 5 9.05228 5 8.5ZM8 11.5C7.44772 11.5 7 11.9477 7 12.5C7 13.0523 7.44772 13.5 8 13.5H16C16.5523 13.5 17 13.0523 17 12.5C17 11.9477 16.5523 11.5 16 11.5H8ZM10 15.5C9.44772 15.5 9 15.9477 9 16.5C9 17.0523 9.44772 17.5 10 17.5H14C14.5523 17.5 15 17.0523 15 16.5C15 15.9477 14.5523 15.5 14 15.5H10Z'
      />
    </svg>
  )
}

export default Filter
