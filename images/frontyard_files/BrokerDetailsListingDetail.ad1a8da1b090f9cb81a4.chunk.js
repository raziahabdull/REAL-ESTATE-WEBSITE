(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[45],{1472:function(e,a,t){e.exports={lafYellow:"#d3ae48",lwOrange:"#fa6401",lwGray:"#dddddd",container:"f4c03","logo-container-mobile":"_5d77c","logo-container-desktop":"_6f962","sub-container":"dea2c",title:"_06825","title-no-sub":"_7e2f0","broker-name-free":"_8c1d0","broker-name-premium":"_211fb","broker-company-link":"_5f2d9","broker-info-standard":"da910","broker-info-silver":"ff4ae","broker-info-gold":"_95ebf","broker-info-platinum":"a60eb","broker-info-diamond":"fb987","detail-link-text":"_994dd","detail-link-container":"_2bf52","phone-icon":"ed417","view-website-icon":"c40d5","diamond-icon":"_6cafe","badge-icon":"_8e805","home-icon":"_6e71c","diamond-url":"cf575","unlinked-company-name-standard":"d9a6e","unlinked-company-name-silver":"_1d0cd","unlinked-company-name-gold":"_96fa9","unlinked-company-name-platinum":"a4e69","unlinked-company-name-diamond":"_45362","broker-portrait-gold":"db048","broker-portrait-silver":"_270bc","broker-portrait-standard":"ae340","broker-portrait-platinum":"c2965","broker-portrait-diamond":"_1f880","broker-info-text-standard":"_6043d","broker-info-text-silver":"f70df","broker-info-text-gold":"e488a","broker-info-text-platinum":"_5cb2b","broker-info-text-diamond":"_32407","broker-contact-container-standard":"bc30f","broker-contact-container-silver":"_71637","broker-contact-container-gold":"_00a34","broker-contact-container-platinum":"_21baf","broker-contact-container-diamond":"_3c18f","broker-bio-standard":"_1b478","broker-bio-silver":"d11a0","broker-bio-gold":"_8ddc4","broker-bio-platinum":"_7007d","broker-bio-diamond":"dcc38","expand-text":"c3637","broker-bio-expanded":"_5e8e7","broker-bio-not-expanded":"_31962","gold-bio":"_77ad5","platinum-bio":"_4258c","diamond-bio":"e5663","diamond-contact-section":"_8b508","diamond-contact-section-item":"_1002b","diamond-contact-section-text":"_7b9ec","button-text":"_3e324","silver-contact-button":"_7e586","standard-contact-button":"_85f3e","diamond-contact-button":"_51990","platinum-contact-button":"fb7f6","gold-contact-button":"af2ef",video:"_95904",arrow:"_60a89","arrow-up":"_46f92"}},726:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(3),i=t(350),c=t(820),l=t.n(c);a.a=function(e){var a=e.brokerDetailsContext,t=e.store,n=e.brokerDetails,c=a.hasBrokerLogo,d=a.hasALC,s=a.alcImg,m=a.alcAlt,u=r.c.brokerLogoLarge,b=r.c[u],p=r.d[b].size.height,f=c?Object(r.b)(u,t.imageDomain,n.logoId):{};return o.a.createElement("div",{className:l.a.logo},c&&o.a.createElement(i.a,{className:l.a["broker-logo"],"data-testid":"broker-logo",src:f.fallbackUrl,sources:f.sources,alt:"Logo",height:p}),d&&o.a.createElement("img",{className:l.a["alc-logo"],"data-testid":"alc-logo",src:"".concat(s),alt:"".concat(m)}))}},727:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(3),i=t(53),c=t(32),l=t(821),d=t.n(l),s=t(185),m=t(1),u=t(49),b=t.n(u);a.a=function(e){var a=e.brokerDetails,t=e.portraitId,n=e.handler,l=e.isBrokerProfile,u=e.isListingDetailPage,p=e.isFree,f=e.upgradeLevel,g=e.small,k=e.store,v=g?r.c.agentPortraitSmall:r.c.agentPortraitLarge,h=Object(r.j)(v,k.imageDomain,t),E=k.siteIdentity.isLand,y=k.routing.brokerResultsMember.link({companyName:a.companyName,contactName:a.contactName,accountId:a.accountId}),N=u?d.a["listing-detail-page-section"]:l?d.a["member-page-section"]:d.a["lead-form-modal-section"],_=i.a.brokerResultsMember.link({accountId:a.accountId}),x=E?"":p?d.a.hide:d.a["inline-block"];return o.a.createElement(c.b,{onClick:function(){return n.handleBroker().then(function(e){e.closeContactBrokerModal()})},to:E?_:y,className:N,"aria-label":"Broker Details"},!!t&&o.a.createElement("div",{"data-testid":"broker-portrait",style:{backgroundImage:'url("'.concat(h,'")')},className:b()(x,d.a["broker-portrait"],f&&d.a["".concat(f,"-portrait")])}),o.a.createElement(s.a,{to:m.B.LAND},!t&&o.a.createElement("div",{"data-testid":"avatar",className:d.a["image-missing"]})))}},820:function(e,a,t){e.exports={lafYellow:"#d3ae48",lwOrange:"#fa6401",lwGray:"#dddddd",logo:"ae1e5","alc-logo":"_20d5d","broker-logo":"_5b3db"}},821:function(e,a,t){e.exports={lafYellow:"#d3ae48",lwOrange:"#fa6401",lwGray:"#dddddd","member-page-section":"d6e40","broker-portrait":"c6292","listing-detail-page-section":"_11f1c","silver-portrait":"e95fc","gold-portrait":"_7535c","platinum-portrait":"_32154","diamond-portrait":"_8838a","lead-form-modal-section":"_19f61","image-missing":"_60adb",hide:"_3cae0","inline-block":"da5da"}},916:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return B});var n=t(0),o=t.n(n),r=t(1),i=t(32),c=t(194),l=t(280),d=t(211),s=t(4),m=t(1472),u=t.n(m),b=t(53),p=t(56),f=t(55),g=t(726),k=t(727),v=t(37),h=t(223),E=t(49),y=t.n(E),N=t(374);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,a){return!a||"object"!==_(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,a){return(w=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var B=function(e){function a(e){var t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(t=I(this,L(a).call(this,e))).state={isBioExpanded:!1,shouldShowBioExpand:!1,initialized:!1},t}var t,m,E;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&w(e,a)}(a,n["Component"]),t=a,(m=[{key:"updateBrokerBioState",value:function(){var e,a;if(!this.state.initialized){var t=document.getElementById("broker-bio");(null===(e=t)||void 0===e?void 0:e.scrollHeight)>(null===(a=t)||void 0===a?void 0:a.clientHeight)?this.setState({shouldShowBioExpand:!0,isBioExpanded:!1,initialized:!0}):this.setState({shouldShowBioExpand:!1,isBioExpanded:!0,initialized:!0})}}},{key:"componentDidUpdate",value:function(e){e.propertyData.listingId!==this.props.propertyData.listingId&&this.state.initialized&&this.setState({isBioExpanded:!1,shouldShowBioExpand:!1,initialized:!1}),this.updateBrokerBioState()}},{key:"componentDidMount",value:function(){this.updateBrokerBioState()}},{key:"getUpgradeLevel",value:function(){var e=this.props.propertyData,a=e.isDiamond,t=e.isPlatinum,n=e.isGold,o=e.isFree;return a?"diamond":t?"platinum":n?"gold":a||n||t||o?"standard":"silver"}},{key:"render",value:function(){var e,a,t=this,m=this.props,E=m.handler,_=m.store,x=m.propertyData,I=m.brokerVideoData,L=this.state,w=L.isBioExpanded,B=L.shouldShowBioExpand,S=_.siteId,C=_.brokerDetails,D=_.siteIdentity,O=x.isFree,A=x.isGold,P=x.isPlatinum,U=x.isDiamond,j=x.marketStatus,F=U||P||A,G=!(O||A||P||U),M=j===r.q.SOLD||j===r.q.OFF_MARKET,T=M||A||P||G||U,z=M||G,R=v.a.GetBrokerPhoneNumber(C),H=v.a.GetFormattedBrokerPhoneNumber(R),Y=D.isLand?b.a:D.isLAF?p.a:f.a,K={portraitId:C.portraitId||C.badgeId||C.logoId,hasBrokerLogo:Boolean(C.logoId),hasALC:C.alcCertified||C.alcAdvancedCertified,alcImg:C.alcAdvancedCertified?"/assets/images/alc/alcAdv.png":C.alcCertified?"/assets/images/alc/alc.jpg":"",alcAlt:C.alcAdvancedCertified?"ALCAdvanced":C.alcCertified?"ALC":""},V=C.contactName||C.companyName,q=function(e){return Object(N.a)(E,x,Object(h.a)(e))},W=null;(x.isPlatinum||x.isDiamond)&&I&&(W=I.mediaTypeId===r.G.YOUTUBE?"https://www.youtube.com/embed/".concat(I.mediaId,"?autoplay=1"):"https://player.vimeo.com/video/".concat(I.mediaId,"?autoplay=1"));var J=C.companyCity&&C.companyCity.length>0?C.companyCity+", "+C.companyState:C.companyState,Q=C.contactName||C.companyName||C.licenseNumber||R||J;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:u.a.container,"data-testid":"BrokerDetailsListingDetail"},o.a.createElement("div",{className:Q?u.a.title:u.a["title-no-sub"]},"Contact Seller"),Q&&o.a.createElement("div",{className:u.a["sub-container"]},F&&K.hasBrokerLogo&&o.a.createElement("div",{role:"button",tabIndex:0,onClick:function(){return q(C.url)},className:u.a["logo-container-mobile"]},o.a.createElement(g.a,{brokerDetails:C,store:_,brokerDetailsContext:K})),o.a.createElement("div",{className:u.a["broker-contact-container-".concat(this.getUpgradeLevel())]},T&&o.a.createElement("div",{className:u.a["broker-portrait-".concat(this.getUpgradeLevel())]},o.a.createElement(k.a,{isListingDetailPage:!0,upgradeLevel:this.getUpgradeLevel(),store:_,brokerDetails:C,handler:E,portraitId:K.portraitId,isBrokerProfile:!1,small:z})),o.a.createElement("div",{className:u.a["broker-info-text-".concat(this.getUpgradeLevel())]},C.contactName?o.a.createElement("div",{className:u.a["broker-name-".concat(O?"free":"premium")]},o.a.createElement(i.b,{to:Y.brokerResultsMember.link({accountId:C.accountId,contactName:C.contactName})},C.contactName)):o.a.createElement("div",{className:u.a["broker-name-".concat(O?"free":"premium")],tabIndex:0,role:"button",onClick:function(){return C.url&&q(C.url)}},C.companyName),o.a.createElement("div",{className:u.a["broker-info-".concat(this.getUpgradeLevel())]},C.contactName&&(O||!C.url||U?o.a.createElement("p",{className:u.a["unlinked-company-name-".concat(this.getUpgradeLevel())]},C.companyName):o.a.createElement("div",{className:u.a["broker-company-link"],tabIndex:0,role:"button",onClick:function(){return q(C.url)}},C.companyName)),!U&&o.a.createElement(o.a.Fragment,null,C.licenseNumber&&o.a.createElement("p",null,"License #".concat(C.licenseNumber)),J&&o.a.createElement("p",null,J)),U&&C.url&&o.a.createElement("div",{className:u.a["diamond-url"],role:"button",tabIndex:0,onClick:function(){return q(C.url)}},o.a.createElement("div",{className:u.a["detail-link-container"]},o.a.createElement("div",{className:u.a["view-website-icon"]}),o.a.createElement("div",{className:u.a["detail-link-text"]},"Visit Website"))),H&&o.a.createElement("a",{onClick:function(){return Object(N.b)(E,C,l.a.APIPropertyToLogInfo(x))},href:H},o.a.createElement("div",{className:u.a["detail-link-container"]},o.a.createElement("div",{className:u.a["phone-icon"]}),o.a.createElement("div",{className:u.a["detail-link-text"]},R))))),F&&o.a.createElement("div",{role:"button",tabIndex:0,onClick:function(){return q(C.url)},className:u.a["logo-container-desktop"]},o.a.createElement(g.a,{brokerDetails:C,store:_,brokerDetailsContext:K}))),U&&o.a.createElement("div",{className:u.a["diamond-contact-section"]},C.licenseNumber&&o.a.createElement("div",{className:u.a["diamond-contact-section-item"]},o.a.createElement("span",{className:u.a["badge-icon"]}),o.a.createElement("span",{className:u.a["diamond-contact-section-text"]},"License # ".concat(C.licenseNumber))),J&&o.a.createElement("div",{className:u.a["diamond-contact-section-item"]},o.a.createElement("span",{className:u.a["home-icon"]}),o.a.createElement("span",{className:u.a["diamond-contact-section-text"]},J)),o.a.createElement("div",{className:u.a["diamond-contact-section-item"]},o.a.createElement("span",{className:u.a["diamond-icon"]})," ",o.a.createElement("span",{className:u.a["diamond-contact-section-text"]},"Premium Seller"))),F&&(!!((null===(e=C.description)||void 0===e?void 0:e.length)>1)||!!(null===(a=C.description[0])||void 0===a?void 0:a.length))&&o.a.createElement("div",{className:u.a["broker-bio-".concat(this.getUpgradeLevel())]},o.a.createElement("h3",null,"About ",V),o.a.createElement("div",{className:w?u.a["broker-bio-expanded"]:u.a["broker-bio-not-expanded"]},o.a.createElement("p",{id:"broker-bio",className:u.a["".concat(this.getUpgradeLevel(),"-bio")]},C.description),o.a.createElement("span",{tabIndex:0,role:"button",onClick:function(){t.setState({isBioExpanded:!w})},className:u.a["expand-text"]},B&&(w?o.a.createElement("span",null,"Show Less ",o.a.createElement("span",{className:y()(u.a.arrow,u.a["arrow-up"])})):o.a.createElement("span",null,"Show More ",o.a.createElement("span",{className:u.a.arrow}))))))),!M&&o.a.createElement(c.a,{onClick:function(){d.a.leadEvents.leadFormViewed(),E.handleBroker().then(function(e){e.loadContactBrokerModal({siteId:S,leadSource:r.o.ShowcaseLanding,brokerId:C.accountId,countyId:x.county.id,listingId:x.listingId,siteListingId:x.siteListingId,listingLevel:x.listingLevel,listingUpgradeLevel:d.a.getListingUpgradeLevel(x),externalSourceId:x.externalSourceId,partnerId:x.partnerId,showCheckboxes:!0,listingLogInfo:l.a.APIPropertyToLogInfo(x),isFree:x.isFree,price:x.price,acres:x.acres,propertyTitle:Object(s.f)(x)})})},className:u.a["".concat(this.getUpgradeLevel(),"-contact-button")],isPrimary:!0,isGradient:U},o.a.createElement("span",{className:u.a["button-text"]},"Contact ",P||U?V:"Seller")),(P||U)&&W&&o.a.createElement("div",{key:I.mediaId,className:u.a.video},o.a.createElement("h3",null,"About ",C.companyName||C.contactName),o.a.createElement("iframe",{title:"video",src:W,frameBorder:"0",allowFullScreen:!0,sandbox:"allow-same-origin allow-scripts"}))))}}])&&x(t.prototype,m),E&&x(t,E),a}()}}]);