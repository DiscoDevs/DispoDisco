import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

/**
 * Primary UI component for user interaction
 */

const BadgeElement = styled.div`
  padding: 0.7rem 1rem;
  color: ${(props) => (props.color ? props.color : "var(--white)")};

  background-color: ${(props) => {
    const type = props.type;
    switch (type) {
      case "cargo":
        return "var(--cargo)";
      case "direct":
        return "var(--direct)";
      case "kutsche":
        return "var(--kutsche)";
      default:
        return "var(--primary-color)";
    }
  }};

  text-align: center;
  font-weight: bold;

  border-radius: 50%;
  border-radius: var(--border-radius);
`;

export const Badge = ({
  backgroundColor,
  color,
  type,
  size,
  label,
  ...props
}) => {
  return (
    <BadgeElement type={type} color={color} {...props}>
      {label}
    </BadgeElement>
  );
};

Badge.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["direct", "kutsche", "cargo"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button contents
   */
  color: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
