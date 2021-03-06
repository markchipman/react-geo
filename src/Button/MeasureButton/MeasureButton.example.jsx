import React from 'react';
import { render } from 'react-dom';

import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOsm from 'ol/source/osm';
import olProj from 'ol/proj';

import {
  MeasureButton,
  ToggleGroup
} from '../../index.js';

//
// ***************************** SETUP *****************************************
//
const map = new OlMap({
  layers: [
    new OlLayerTile({
      name: 'OSM',
      source: new OlSourceOsm()
    })
  ],
  view: new OlView({
    center: olProj.fromLonLat([37.40570, 8.81566]),
    zoom: 4
  })
});

//
// ***************************** SETUP END *************************************
//

render(
  <div>
    <div id="map" style={{
      height: '400px'
    }} />

    <div className="example-block">
      <span>Select a measure type:</span>
      <ToggleGroup>
        <MeasureButton
          name="line"
          map={map}
          measureType="line"
        >
        Distance
        </MeasureButton>

        <MeasureButton
          name="steps"
          map={map}
          measureType="line"
          showMeasureInfoOnClickedPoints
        >
        Distance with step labels
        </MeasureButton>

        <MeasureButton
          name="multi"
          map={map}
          measureType="line"
          multipleDrawing
        >
        Distance with multiple drawing
        </MeasureButton>

        <MeasureButton
          name="poly"
          map={map}
          measureType="polygon"
        >
        Area
        </MeasureButton>

        <MeasureButton
          name="angle"
          map={map}
          measureType="angle"
        >
        Angle
        </MeasureButton>
      </ToggleGroup>

    </div>

  </div>,

  // Target
  document.getElementById('exampleContainer'),

  // Callback
  () => {
    map.setTarget('map');
  }
);
