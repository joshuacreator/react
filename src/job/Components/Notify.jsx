import { Store } from "react-notifications-component";

const Notify = (props) => {
  //   let { title, msg, type } = props;

  Store.addNotification({
    title: props.title,
    message: props.msg,
    type: props.type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export default Notify;
