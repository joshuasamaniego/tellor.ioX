import React from "react";

import "./AboutIntro.scss";
import HeaderDesc from "components/shared/HeaderDesc/HeaderDesc";

const AboutIntro = () => {
  const content = [
    {
      title: "Unstoppable oracle",
      description:
        "The foundation for open and honest data. Tellor securely puts real world data on-chain. We aim to build a system where data reporters can push information anywhere.",
    },
    {
      title: "Decentralized structure",
      description:
        "No admin key and run by the community. Tellor uses a smart contract, nicknamed Parachute, to hold the keys to Tellor’s governance. ",
    },
    {
      title: "Future vision",
      description:
        "We envision a world where every person is the owner of their own data and identity. A world where institutions can no longer censor users or sell their personal information.",
    },
  ];

  return (
    <div className="AboutIntro">
      <div className="AboutIntro__header">
        <h1 className="page-header">About tellor</h1>
      </div>
      <div>
        <HeaderDesc
          title={content[0].title}
          description={content[0].description}
        />
        <HeaderDesc
          title={content[1].title}
          description={content[1].description}
        />
        <HeaderDesc
          title={content[2].title}
          description={content[2].description}
        />
      </div>
      <div className="AboutIntro__founders">
        <h2 id="jobs" className="page-header-small">
          Founders
        </h2>
        <a className="page-text">Nick Fett - CTO</a>
        <a className="page-text">Brenda Loya - CEO</a>
        <a className="page-text">Michael Zemrose - CSO</a>
      </div>
    </div>
  );
};

export default AboutIntro;
