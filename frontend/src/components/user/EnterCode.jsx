import React, { useEffect, useState } from "react";

const EnterCode = (props) => {
  const [code, setCode] = useState("");
  const [codeValidation, setCodevalidation] = useState(false);
  const [btnColorState, setBtnColorState] = useState(false);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    console.log(code);
  }, [code, btnColorState, codeValidation, isChecked]);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const codeBtnChangeColor = () => {
    codeValidation ? setBtnColorState(true) : setBtnColorState(false);
  };

  const isCode = () => {
    const codeRegex = /^(?=.*[0-9]+$).{5}/;

    if (codeRegex.test(code) && code.length > 0) {
      setCodevalidation(true);
      codeBtnChangeColor();
    } else {
      setCodevalidation(false);
      codeBtnChangeColor();
    }
    console.log(codeValidation);
  };

  const onClickNextTo = () => {};
  return (
    <div className="wrap">
      <div className="content-container">
        <div className="inner">
          <div className="logo-name">
            <h2>mokomoko</h2>
          </div>
          <p className="forgot-msg">
            인증 코드를 받으셨나요 ? <br /> 코드 인증을 통해 비밀번호를 재설정 해보세요.
          </p>

          <div className="input-form">
            <div className="mail-code">
              <input
                className="input-mail-code"
                type="text"
                autoCapitalize="off"
                name="code"
                value={code}
                placeholder={isChecked ? code : "코드 입력"}
                onChange={onChangeCode}
                onKeyUp={isCode}
              />
              <div className="code-submit">
                <button
                  id="code-next-btn"
                  className={"code-next-btn-" + (btnColorState ? "onColor" : "offColor")}
                  type="button"
                  onClick={onClickNextTo}
                  disabled={!btnColorState}
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterCode;
