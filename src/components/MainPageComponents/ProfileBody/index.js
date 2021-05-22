import React from 'react';
import { Map } from './Map';
import './profileBody.scss';
import UserExperienceList from './UserExperienceList';
import UserPortfolio from './UserPortfolio';
import UserSampleCode from './UserSampleCode';
import UserAvailability from './UserAvailability';

export default function ProfileBody() {
  return (
    <div>
      <div className="profileBodyFirstGrid">
        <div>
          <UserPortfolio />
        </div>
        <div>
          <UserExperienceList />
        </div>
        <div className="userSampleCodeMainBox">
          <UserSampleCode />
        </div>
        <div>
          <UserAvailability />
        </div>
      </div>
      <div className="profileBodySecondGrid">
        <div></div>
        <div></div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
}
