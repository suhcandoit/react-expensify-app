import moment from 'moment';

export const filters = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'date'
}

export const altFilters = {
    text:'altFilter',
    startDate:moment(0),
    endDate:moment().add(3, 'days'),
    sortBy:'amount'
}
