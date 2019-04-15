export const setTextFilter = (text='') => {
    return({
        type:'SET_TEXT_FILTER',
        text
    })    
}

export const sortByAmount = () => {
    return({
        type:'SORT_BY_AMOUNT'
    })
}

export const sortByDate = () => ({ type:'SORT_BY_DATE' })

export const setStartDate = (startDate = undefined) => {
    return({
        type:'SET_START_DATE',
        startDate
    })
}

export const setEndDate = (endDate) => {
    return({
        type:'SET_END_DATE',
        endDate
    })
}

