// import { Component } from 'react';
// // import { render } from '@testing-library/react';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   //
//   positiveCounter = e => {
//     this.setState(positiv => ({
//       good: positiv.good + 1,
//     }));
//   };
//   neutralCounter = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };
//   negativeCounter = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <div>
//           <h1>Please leave feedback</h1>
//           <button type="button" onClick={this.positiveCounter}>
//             Good
//           </button>
//           <button type="button" onClick={this.neutralCounter}>
//             Neutral
//           </button>
//           <button type="button" onClick={this.negativeCounter}>
//             Bad
//           </button>
//         </div>
//         <div>
//           <ul>Statistics</ul>
//           <li>Good:{this.state.good}</li>
//           <li>Neutral:{this.state.neutral}</li>
//           <li>Bad:{this.state.bad}</li>
//           <li>Total:{total}</li>
//           <li>Positive feedback:{positivePercentage}%</li>
//         </div>
//       </div>
//     );
//   }
// }

// export default Feedback;
import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(option => (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </ButtonContainer>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
