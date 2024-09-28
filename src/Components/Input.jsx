import React from "react";
import { motion } from "framer-motion";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.input
        id="search"
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "600px",
          textAlign: "center",
        }}
        whileFocus={{
          scale: 1.1,
          borderColor: "#4caf50",
          boxShadow: "0px 0px 10px rgba(76, 175, 80, 0.7)",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

export default SearchInput;
