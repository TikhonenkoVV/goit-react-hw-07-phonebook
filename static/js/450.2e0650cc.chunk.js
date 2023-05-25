"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[450],{450:function(n,e,t){t.r(e);var a=t(2606),o=t(1481),r=t(184);e.default=function(){return(0,r.jsx)(a.$0,{children:(0,r.jsx)(a.W2,{children:(0,r.jsx)(o.t,{})})})}},1481:function(n,e,t){t.d(e,{t:function(){return V}});var a,o,r,s,i,c,l,d,u,m,p=t(9439),h=t(168),f=t(225),x=t(5705),g=t(1087),b=(0,f.Z)(x.l0)(a||(a=(0,h.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    max-width: 400px;\n    padding-bottom: 30px;\n"]))),Z=(0,f.Z)(g.rU)(o||(o=(0,h.Z)(["\n    display: block;\n    position: absolute;\n    top: 0px;\n    left: 0;\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.hover})),v=f.Z.input(r||(r=(0,h.Z)(["\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n"]))),y=f.Z.label(s||(s=(0,h.Z)(["\n    display: block;\n    width: 150px;\n    margin: 0 auto;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: #302b2b;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: url(",");\n"])),(function(n){return n.file})),j=f.Z.button(i||(i=(0,h.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 40px;\n    border-radius: 4px;\n    font-size: 18px;\n    background-color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.colors.hover})),A=t(6727),z=A.Ry().shape({name:A.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",test:function(n){return/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/.test(n)}}).nullable(!0).transform((function(n,e){return""===e.trim()?null:n})).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),surname:A.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",test:function(n){return/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/.test(n)}}).nullable(!0).transform((function(n,e){return""===e.trim()?null:n})),number:A.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",test:function(n){return/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(n)}}).required("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),C=t(9434),w=t(8174),k=t(3942),_=t(4793),F=t(2713),S=t(2791),I=t(8427),J=f.Z.label(c||(c=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-size: ",";\n    transition: color 250ms;\n    & svg {\n        transition: fill 250ms;\n    }\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n    &:hover svg,\n    &:focus svg {\n        fill: ",";\n    }\n\n    &:nth-of-type(5) {\n        margin-bottom: 30px;\n    }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.hover})),B=f.Z.div(l||(l=(0,h.Z)(["\n    position: relative;\n    display: flex;\n"]))),$=f.Z.div(d||(d=(0,h.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #404040;\n    width: 33px;\n    height: 33px;\n    padding: 5px;\n"]))),M=(0,f.Z)(x.gN)(u||(u=(0,h.Z)(["\n    flex-grow: 1;\n    display: block;\n    margin: 0;\n    padding: 5px 33px 5px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    font-size: 18px;\n"]))),N=f.Z.span(m||(m=(0,h.Z)(["\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),R=t(184),U=function(n){var e,t=n.name,a=n.type,o=n.onChange,r=n.use;return(0,R.jsxs)(J,{children:[(e=t,e.charAt(0).toUpperCase()+e.slice(1)),(0,R.jsxs)(B,{children:[(0,R.jsx)($,{children:(0,R.jsx)(F.n,{w:23,h:23,use:"".concat(_.Z,"#icon-").concat(r)})}),(0,R.jsx)(M,{type:a,name:t,placeholder:"Enter contact name",onChange:o})]}),(0,R.jsx)(x.Bc,{name:t,children:function(n){return(0,R.jsx)(N,{children:n})}})]})},q=t(7689),D=t(4702),K=t(276),L=(0,D.ZF)({apiKey:"AIzaSyCKXdZk6YD8rC64yq8pJuv_PrJUlFj-tIk",authDomain:"uploadimg-4d2bd.firebaseapp.com",projectId:"uploadimg-4d2bd",storageBucket:"uploadimg-4d2bd.appspot.com",messagingSenderId:"484124534248",appId:"1:484124534248:web:ae150a2752a6afe3a7b05d"}),P=(0,K.cF)(L),H=t(4296),V=function(){var n,e=(0,C.I0)(),t=(0,C.v9)(k.Af),a=(0,S.useState)(I),o=(0,p.Z)(a,2),r=o[0],s=o[1],i=(0,S.useState)(null),c=(0,p.Z)(i,2),l=c[0],d=c[1],u=(0,S.useRef)(),m=function(n){var e=n.target.files[0];d(e);var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return s(t.result)}},h=(0,q.TH)(),f=(null===h||void 0===h||null===(n=h.state)||void 0===n?void 0:n.from)||"/";return(0,R.jsx)(x.J9,{validationSchema:z,initialValues:{name:"",surname:"",number:"",email:"",img:""},onSubmit:function(n,a){var o=a.resetForm,r=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})),s=t.find((function(e){return e.number===n.number}));r?(0,w.Am)("".concat(n.name," is already in contacts.")):s?(0,w.Am)("".concat(n.number," is already in contacts as ").concat(s.name,".")):(!function(){if(l){var n=(0,K.iH)(P,"images/".concat(l.name));(0,K.KV)(n,l).then((function(n){console.log(n)}))}}(),e((0,H.Mr)(n)),o())},children:function(n){var e=n.handleSubmit,t=n.handleChange;return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(b,{onSubmit:e,children:[(0,R.jsx)(Z,{to:f,children:(0,R.jsx)(F.n,{w:20,h:20,use:"".concat(_.Z,"#icon-close")})}),(0,R.jsx)(v,{ref:u,id:"img",name:"img",type:"file",onChange:m}),(0,R.jsx)(y,{htmlFor:"img",file:r}),(0,R.jsx)("h1",{children:"Contact name"}),(0,R.jsx)(U,{type:"text",name:"name",onChange:t,use:"contact"}),(0,R.jsx)(U,{type:"text",name:"surname",onChange:t,use:"contact"}),(0,R.jsx)(U,{type:"tel",name:"number",onChange:t,use:"phone"}),(0,R.jsx)(U,{type:"email",name:"email",onChange:t,use:"email"}),(0,R.jsxs)(j,{type:"submit",children:[(0,R.jsx)(F.n,{w:20,h:20,use:"".concat(_.Z,"#icon-save-contact")}),"Add contact"]})]})})}})}},8427:function(n,e,t){n.exports=t.p+"static/media/avatar-default.429360a338edc3aec2f1.png"}}]);
//# sourceMappingURL=450.2e0650cc.chunk.js.map