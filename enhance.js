/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */

import CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';
import * as enhancements from './src';

export * from './src';

Object.keys(enhancements).forEach(key => {
  CognitoIdentityServiceProvider[key] = enhancements[key];
});

// The version of crypto-browserify included by aws-sdk only
// checks for window.crypto, not window.msCrypto as used by
// IE 11 – so we set it explicitly here
if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
  window.crypto = window.msCrypto;
}
