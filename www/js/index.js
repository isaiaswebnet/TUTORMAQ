/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    function onLoad() {
	     document.addEventListener("online", onOnline, false);
             document.addEventListener("offline", onOffline, false);
             document.addEventListener("deviceready", onDeviceReady, false);
         }
         
         function onDeviceReady() {
             console.log("onDeviceReady");
             console.log(navigator.notification);
         }
         
         function onOnline() {
             console.log("onOnline");
             ref = cordova.InAppBrowser.open('https://wodan.com.br/tutormaq/', '_blank', 'location=no');
             ref.addEventListener("exit", function(event) {navigator.notification.confirm('Você deseja sair do aplicativo?', onBackButton, 'Fique Conosco', ['NÃO','SIM']); }, false);
         }
         
         function onOffline() {
             console.log("onOffline");
             navigator.notification.alert('Sinto muito, parece haver um problema de rede.', onBackButton2, 'Sem Internet', 'SAIR');
         }
         
         function onBackButton(e) {
             if(e==2){
             	navigator.app.exitApp();
             }else{
             	onOnline();
             }
         }
         
         function onBackButton2() {
             navigator.app.exitApp();
         }
};
