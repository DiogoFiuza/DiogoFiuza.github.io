import React from 'react';
import '../styles/Stacks.css';
import {
  DiReact, DiHtml5, DiCss3, DiJsBadge, DiNpm,
  DiGithubBadge, DiBootstrap, DiDocker, DiMysql,
} from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

function Stacks() {
  return (
    <>
      <h1 className="stacks-title" id='MyStacks'>Stacks</h1>
      <hr className="line_below_title" />
      <section>
        <div className="icon-box">
          <DiReact className="icon-image" />
          <p>React.js</p>
        </div>
        <div className="icon-box">
          <DiHtml5 className="icon-image" />
          <p>HTML5</p>
        </div>
        <div className="icon-box">
          <DiCss3 className="icon-image" />
          <p>CSS3</p>
        </div>
        <div className="icon-box">
          <DiJsBadge className="icon-image" />
          <p>JavaScript</p>
        </div>
        <div className="icon-box">
          <DiNpm className="icon-image" />
          <p>NPM</p>
        </div>
        <div className="icon-box">
          <SiRedux className="icon-image" />
          <p>Redux</p>
        </div>
        <div className="icon-box">
          <DiGithubBadge className="icon-image" />
          <p>Github</p>
        </div>
        <div className="icon-box">
          <DiBootstrap className="icon-image" />
          <p>Bootstrap</p>
        </div>
        <div className="icon-box">
          <DiDocker className="icon-image" />
          <p>Docker</p>
        </div>
        <div className="icon-box">
          <DiMysql className="icon-image" />
          <p>MySql</p>
        </div>
      </section>
      <hr className="line_below_text" />
    </>
  );
}

export default Stacks;
