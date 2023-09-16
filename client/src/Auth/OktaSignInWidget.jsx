import { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
// import './../../node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from '../config/OktaConfig';

function OktaSignInWidget({ onSuccess, onError }) {
  const widgetRef = useRef();

  useEffect(() => {

    if (!widgetRef.current) {
      return false;
    }

    const widget = new OktaSignIn(oktaConfig);

    widget.showSignInToGetTokens({
      el: widgetRef.current,
    }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return (
    <div className="container">
      <div ref={widgetRef}></div>
    </div>
  );
};

export default OktaSignInWidget;