'use client'

import { FilterListTypes } from "@bitgouel/types"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { FilterModal, useModal } from "@bitgouel/common"

interface onSelectedParameter {
  item: string
  checked: boolean
  inputValue?: string
}

interface Parameter {
  defaultFilterList: FilterListTypes[]
  setFilterPayload: Dispatch<SetStateAction<string>>
}

const useFilterSelect = ({ defaultFilterList, setFilterPayload}: Parameter) => {
  const [filterList, setFilterList] = useState<FilterListTypes[]>(defaultFilterList)
  const { openModal } = useModal()
  const onSelected = (parameter: onSelectedParameter) => {
    setFilterList((filter) =>
      filter.map((filterItem) =>
        filterItem.item === parameter.item
          ? { ...filterItem, checked: true }
          : { ...filterItem, checked: false }
      )
    )

    if (!parameter.checked && parameter.item === '전체') setFilterPayload('')
    else if (parameter.checked && parameter.item === '기타' && parameter.inputValue) setFilterPayload(parameter.inputValue)
    else if (!parameter.checked) setFilterPayload(parameter.item)

    openModal(
      <FilterModal
        title='테스트'
        filterList={filterList}
        onSelected={onSelected}
      />
    )
  }

  return { filterList, onSelected }

}

export default useFilterSelect