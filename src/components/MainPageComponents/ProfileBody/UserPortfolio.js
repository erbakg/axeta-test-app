import React from 'react';

const portfolio = [
  'Bootstrap 4 Material Design (Sample Link)',
  'Modern JavaScript stack',
  'Datepicker for twitter bootstrap',
  'Fast and reliable Bootstrap widgets in Angular',
];
export default function UserPortfolio() {
  return (
    <div className="userPortfolioList">
      <div className="userPortfolioMainTxtBox">
        <p className="userPortfolioMainTxt">Portfolio</p>
      </div>
      {portfolio.map((item, index) => (
        <p className="userPortfolioListItemTxt" key={index}>
          - {item}
        </p>
      ))}
    </div>
  );
}
