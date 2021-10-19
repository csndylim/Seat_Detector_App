import React from 'react';
import TrendboxLegend from './TrendboxLegends';
import TrendBoxList from './TrendboxList';

const TrendContainer = () => {
    return (
        <div>
            <TrendBoxList />
            <TrendboxLegend />
        </div>
    )
};

export default TrendContainer;