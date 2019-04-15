import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseFilters extends React.Component {
    state = {
        calendarFocus: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocus) => {
        this.setState(()=> ({ calendarFocus }))
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSelectChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }               
    } 
    render(){
        return(
            <div>
            <input 
                type='text' 
                value={this.props.filters.text}
                onChange={this.onTextChange}/>
            <select onChange={this.onSelectChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker
                startDate={this.props.filters.startDate} 
                endDate={this.props.filters.endDate}  
                onDatesChange={this.onDatesChange}  
                focusedInput={this.state.calendarFocus}  
                onFocusChange={this.onFocusChange}  
                numberOfMonths= {1}
                isOutsideRange={()=>false}
                showClearDates={true}                
            />
        </div>    
        );
    }
}

//setup value and onChange for select
const mapStateToProps = (state) => ({ filters: state.filters })

const mapDispatchToProps = (dispatch) => ({
    setTextFilter:(data) => dispatch(setTextFilter(data)),
    setStartDate:(data) => dispatch(setStartDate(data)),
    setEndDate:(data) => dispatch(setEndDate(data)),
    sortByDate:() => dispatch(sortByDate()),
    sortByAmount:() => dispatch(sortByAmount())
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);