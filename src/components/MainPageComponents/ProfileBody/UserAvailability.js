import React from 'react';

export default function UserAvailability() {
  return (
    <div>
      <div className="userAvailabilityBox">
        <div className="userAvailabilityMainTxtBox">
          <p className="userAvailabilityMainTxt">Availability</p>
        </div>
        <div className="userAvailabilityContentTxtBox">
          <p className="userAvailabilityContentTxt">Full-time</p>
        </div>
      </div>
      <div className="userPreferencesBox">
        <div className="userPreferencesMainTxtBox">
          <p className="userPreferencesMainTxt">Preferred Environment</p>
        </div>
        <div className="userPreferencesContentTxtBox">
          <p className="userPreferencesContentTxt">GitHub, Mac OSX</p>
        </div>
      </div>
    </div>
  );
}
