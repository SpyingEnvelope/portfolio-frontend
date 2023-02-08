import { motion } from "framer-motion";

import './SuccessfulMessage.css';

const SuccessfulMessage = () => {
    return (
        <motion.div
          className={`no-padding d-flex flex-column text-center`}
          style={{ minHeight: "100vh" }}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
        >
          <h1>Message sent successfully!</h1>
          <p>I will reply to you as soon as I can!</p>
        </motion.div>
      );
};

export default SuccessfulMessage;