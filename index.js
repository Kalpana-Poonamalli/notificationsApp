const Notification = (props) => {
  //  Write your code here.
  const { className, icon, msg } = props;
  return (
    <div className={className}>
      <img src={icon} className="img" />
      <p className="para">{msg}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="inner-container">
      <Notification
        className="btn msg1"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        msg="Information Message"
      />
      <Notification
        className="btn msg2"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        msg="Success Message"
      />
      <Notification
        className="btn msg3"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        msg="Warning Message"
      />
      <Notification
        className="btn msg4"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        msg="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
