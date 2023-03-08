import React from 'react';

const Humidity: React.FC = () => {
  return (
    <div className="information__col information__col-humidity humidity">
      <h2 className="information__col-title">Humidity</h2>
      <div className="information__col-info">
        <div className="information__col-graph">
          <div className="information__col-fill" style={{ height: '80%' }}></div>
        </div>
        <span className="information__col-number">80%</span>
      </div>
    </div>
  );
};

export default Humidity;
