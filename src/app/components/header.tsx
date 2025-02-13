import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <a href="https://join.fivedyna.space">
        <img src="/fdlogofull.svg" alt="Logo" className="logo" />
      </a>
      <nav>
        <ul>
          <li className="t">
            <a href="/our-mission">OUR MISSION</a>
            <ul className="longer">
              <li>
                <a href="/core-values">CORE VALUES</a>
              </li>
              <li>
                <a href="/functional-philosophy">FUNCTIONAL PHILOSOPHY</a>
              </li>
              <li>
                <a href="/faq">FREQUENTLY ASKED QUESTIONS</a>
              </li>
            </ul>
          </li>
          <li className="t">
            <a href="/our-team">OUR TEAM</a>
            <ul>
              <li>
                <a href="/executive-board">EXECUTIVE BOARD</a>
              </li>
              <li>
                <a href="/engineering-divisions">ENGINEERING DIVISIONS</a>
              </li>
              <li>
                <a href="/operations-division">OPERATIONS DIVISION</a>
              </li>
            </ul>
          </li>
          <li className="t">
            <a href="/our-vision">OUR VISION</a>
            <ul>
              <li>
                <a href="/long-term-goals">LONG TERM GOALS</a>
              </li>
              <li>
                <a href="/current-projects">CURRENT PROJECTS</a>
              </li>
            </ul>
          </li>
          <li className="t">
            <a href="/join-us">JOIN US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
