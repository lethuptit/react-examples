import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (prop) => {
  if (!prop.businessList) {
    return <h1>Loading ...</h1>;
  }
  var businessCard = prop.businessList.map(b=> <Business key={b} business={b} />)
  return (
    <div className={styles.BusinessList}>
      {businessCard}
    </div>
  );
};


export default BusinessList;
