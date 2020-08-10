import React from 'react';
import MissingPageStyled from './404Styled';

function MissingPage() {
  return (
    <MissingPageStyled>
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place? or maybe you are not worthy.
          <p>
            Anyhow, You can back <a href="/dashboard">home</a> and try from
            there.
          </p>
        </div>
      </div>
    </MissingPageStyled>
  );
}

export default MissingPage;
