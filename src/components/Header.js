// import PropTypes from  "prop-types";
import Button from "./Button";

const Header = ({ title, toggleShow, showAddTask }) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red":"purple"}
        text={showAddTask ? "Close Add Task Bar":"Show Add Task "}
        toggleShow={toggleShow}
      />
    </header>
  );

  // Header.propTypes = {
  //     title:PropTypes.string.isRequired,
  // }
  //DEFAULT PROPS
  // Header.defaultProps = {//!
  //     title:"task defoult"
  // }
  //{title ="task defoult"}//!
};
export default Header;
