import moment from 'moment';

const expense1 = {
    id:'1',
    description:'Gum',
    note:'',
    amount: 100,
    createdAt:0
}

const expense2 = {
    id:'2',
    description:'Rent',
    note:'',
    amount:200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}

const expense3 = {
    id:'3',
    description:'Credit Card',
    note:'',
    amount:300,
    createdAt: moment(0).add(4, 'days').valueOf()
}

export default [expense1, expense2, expense3];