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
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                        type='text' 
                        placeholder='Search expenses'
                        className="text-input"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}/>    
                    </div>
                    <div className="input-group__item">
                        <select onChange={this.onSelectChange} className="select">
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
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