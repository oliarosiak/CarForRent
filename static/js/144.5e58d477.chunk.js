"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{144:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t=r(439),i=r(861),a=r(687),o=r.n(a),c=r(243);function l(){return(l=(0,i.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/adverts");case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://65215f44a4199548356d2007.mockapi.io/cars";var u,d,s,p,m,h,x,f,b,g=r(791),v=r(168),w=r(686),Z=w.Z.div(u||(u=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 320px) {\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  @media screen and (min-width: 890px) {\n    flex-direction: row;\n    margin-bottom: 25px;\n  }\n  @media screen and (min-width: 1440px) {\n    align-items: flex-end;\n    margin-bottom: 50px;\n  }\n"]))),y=w.Z.form(d||(d=(0,v.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 320px) {\n    &:not(:last-child) {\n      margin-bottom: 5px;\n    }\n  }\n  @media screen and (min-width: 890px) {\n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  }\n"]))),j=w.Z.label(s||(s=(0,v.Z)(["\n  width: 224px;\n  display: flex;\n  flex-direction: column;\n  color: var(--text-color);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.5;\n\n  @media screen and (min-width: 320px) {\n    margin-right: 0;\n  }\n  @media screen and (min-width: 890px) {\n    margin-right: 18px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),k=w.Z.select(p||(p=(0,v.Z)(["\n  width: 100%;\n  height: 48px;\n  margin-top: 8px;\n  padding-left: 18px;\n  border-radius: var(--radius-l);\n  border: none;\n  outline: none;\n  background-color: var(--filter-bcg-color);\n  font-family: var(--manrope);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.11;\n  color: var(--black-text-color);\n\n  & > option {\n    background-color: var(--white-color);\n    color: var(--filter-list-color);\n  }\n"]))),S=w.Z.label(m||(m=(0,v.Z)(["\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  color: var(--text-color);\n  font-family: var(--manrope);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.5;\n\n  @media screen and (min-width: 320px) {\n    margin-right: 0;\n  }\n  @media screen and (min-width: 890px) {\n    margin-right: 18px;\n  }\n"]))),C=w.Z.div(h||(h=(0,v.Z)(["\n  display: flex;\n  margin-top: 8px;\n"]))),L=w.Z.input(x||(x=(0,v.Z)(["\n  &[type='number']::-webkit-inner-spin-button,\n  &[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n  &[type='number'],\n  &[type='number']:hover,\n  &[type='number']:focus {\n    appearance: none;\n    -moz-appearance: textfield;\n  }\n\n  position: relative;\n  width: 100%;\n  padding: 14px 0 14px 24px;\n  font-family: var(--manrope);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n  color: var(--black-text-color);\n  border: none;\n  outline: none;\n  background-color: var(--filter-bcg-color);\n  border-radius: 0 var(--radius-l) var(--radius-l) 0;\n\n  &:not(:last-child) {\n    border-right: var(--border-line);\n    border-radius: var(--radius-l) 0px 0px var(--radius-l);\n  }\n"]))),z=w.Z.button(f||(f=(0,v.Z)(["\n  width: 136px;\n  height: 48px;\n  padding: 14px, 44px, 14px, 44px;\n  border-radius: var(--radius-m);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: var(--main-accent-color);\n  color: var(--white-color);\n  font-family: var(--manrope);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  &:hover {\n    background-color: var(--second-accent-color);\n  }\n"]))),M=r(184),P=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],N=function(n){var e=n.onSubmit,r=n.carPriceList,i=(0,g.useState)(""),a=(0,t.Z)(i,2),o=a[0],c=a[1],l=(0,g.useState)(""),u=(0,t.Z)(l,2),d=u[0],s=u[1],p=(0,g.useState)(""),m=(0,t.Z)(p,2),h=m[0],x=m[1],f=(0,g.useState)(""),b=(0,t.Z)(f,2),v=b[0],w=b[1];return(0,M.jsxs)(Z,{children:[(0,M.jsxs)(y,{onSubmit:function(n){n.preventDefault(),e(o,d,h,v),c(""),s(""),x(""),w("")},children:[(0,M.jsxs)(j,{htmlFor:"car-brand",children:["Car brand",(0,M.jsx)(k,{id:"car-brand",name:"brand",value:o,onChange:function(n){c(n.target.value)},children:P.map((function(n){return(0,M.jsx)("option",{value:n,children:n},n)}))})]}),(0,M.jsxs)(j,{htmlFor:"price-hour",children:["Price/ 1 hour",(0,M.jsx)(k,{id:"price-hour",name:"price",value:d,onChange:function(n){s(n.target.value)},children:r.map((function(n){return(0,M.jsxs)("option",{value:n,children:["To ",n,"$"]},n)}))})]}),(0,M.jsxs)(S,{htmlFor:"mileage-km",children:[" ","\u0421ar mileage / km",(0,M.jsxs)(C,{children:[(0,M.jsx)(L,{id:"mileage-km",name:"min",type:"number",value:h,onChange:function(n){x(n.target.value)}}),(0,M.jsx)(L,{id:"mileage-km",name:"max",type:"number",value:v,onChange:function(n){w(n.target.value)}})]})]}),(0,M.jsx)(z,{type:"submit",children:"Search"})]}),(0,M.jsx)(y,{onSubmit:function(n){n.preventDefault(),e(o,d,h,v)},style:{paddingLeft:"3px"},children:(0,M.jsx)(z,{type:"submit",style:{textDecoration:"underline"},children:"Reset"})})]})},B=r(98),F=w.Z.button(b||(b=(0,v.Z)(["\n  display: block;\n  margin: 0 auto 25px auto;\n  padding: 0;\n  color: var(--main-accent-color);\n  text-decoration: underline;\n  border: none;\n  background-color: transparent;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--second-accent-color);\n  }\n\n  &:disabled {\n    color: var(--second-accent-color);\n    cursor: not-allowed;\n  }\n"]))),_=function(n){var e=n.handler,r=n.visible;return(0,M.jsx)(M.Fragment,{children:r?(0,M.jsx)(F,{onClick:function(){return e()},children:"Load more"}):(0,M.jsx)(F,{disabled:!0,children:"Load more"})})},D=r(616),R=function(){return(0,M.jsx)(D.im,{children:(0,M.jsx)(D.xv,{children:"Sorry, no matches found. Try another query"})})},A=function(){var n=(0,g.useState)([]),e=(0,t.Z)(n,2),r=e[0],i=e[1],a=(0,g.useState)(1),o=(0,t.Z)(a,2),c=o[0],u=o[1],d=(0,g.useState)([]),s=(0,t.Z)(d,2),p=s[0],m=s[1],h=(0,g.useState)(!1),x=(0,t.Z)(h,2),f=x[0],b=x[1],v=(0,g.useState)(""),w=(0,t.Z)(v,2),Z=w[0],y=w[1],j=(0,g.useState)(""),k=(0,t.Z)(j,2),S=k[0],C=k[1],L=(0,g.useState)(""),z=(0,t.Z)(L,2),P=z[0],F=z[1],D=(0,g.useState)(""),A=(0,t.Z)(D,2),E=A[0],H=A[1];(0,g.useEffect)((function(){(function(){return l.apply(this,arguments)})().then((function(n){var e=n.map((function(n){return Number(n.rentalPrice.slice(1,n.rentalPrice.length))})).sort((function(n,e){return n-e})).filter((function(n,e,r){return r.indexOf(n)===e}));m(e);var r=n.filter((function(n){return""!==Z?n.make===Z:n})).filter((function(n){return""!==S?Number(n.rentalPrice.slice(1,n.rentalPrice.length))<=Number(S):n})).filter((function(n){return""!==P?n.mileage>=Number(P):n})).filter((function(n){return""!==E?n.mileage<=Number(E):n}));0===r.length?b(!0):b(!1),i(r)}))}),[Z,S,P,E]);var I=function(){u(c+1)},T=8*c,U=r.slice(0,T);return(0,M.jsxs)("div",{children:[(0,M.jsx)(N,{onSubmit:function(n,e,r,t){y(n),C(e),F(r),H(t)},carPriceList:p}),f&&(0,M.jsx)(R,{}),U.length>0&&(0,M.jsx)(B.Z,{cars:U}),U.length>=T?(0,M.jsx)(_,{handler:I,visible:!0}):(0,M.jsx)(_,{handler:I,visible:!1})]})}}}]);
//# sourceMappingURL=144.5e58d477.chunk.js.map