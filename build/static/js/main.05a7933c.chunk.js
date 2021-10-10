(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3kI5O",label:"ContactForm_label__Gsql1",input:"ContactForm_input__34tHd","input-number":"ContactForm_input-number__2lSuY",input_number:"ContactForm_input_number__1KeQg",button:"ContactForm_button__2aqlU"}},,,,,,,function(t,e,n){t.exports={label:"Filter_label__nnitZ",input:"Filter_input__2cLa-"}},function(t,e,n){t.exports={list:"ContactList_list__3vewa"}},function(t,e,n){t.exports={box:"ContactElement_box__1psmT",btn:"ContactElement_btn__2YjAa"}},,,function(t,e,n){t.exports={container:"Container_container__3XLik"}},function(t,e,n){t.exports={title:"Section_title__ViAxB"}},,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),i=(n(21),n(12)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(14),h=n.n(m),d=n(0);var j=function(t){var e=t.children;return Object(d.jsx)("div",{className:h.a.container,children:e})},p=n(3),f=n.n(p),O=n(15),_=n.n(O);function x(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{className:_.a.title,children:e}),n]})}x.protoType={title:f.a.string};var C=x,v=n(16),g=n(27),F=n(2),y=n.n(F),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(g.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:y.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:y.a.label,children:["Enter name",Object(d.jsx)("input",{className:y.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only contain letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(d.jsxs)("label",{className:y.a.label,children:["Enter number",Object(d.jsx)("input",{className:y.a.input_number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number can consist of numerals, spaces, dashes, brackets and start with +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(d.jsx)("button",{className:y.a.button,type:"submit",children:"Save"})]})}}]),n}(c.a.Component),N=S,w=n(9),A=n.n(w),k=function(t){var e=t.filter,n=t.onChangeFilter;return Object(d.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:A.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter the contact's name. Search is not sensitive to input characters.",required:!0,onChange:n,value:e})]})};k.protoType={filter:f.a.string.isRequired,onChangeFilter:f.a.func.isRequired};var q=k,z=n(10),L=n.n(z),T=n(11),Z=n.n(T),E=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(d.jsxs)("p",{className:Z.a.box,children:[Object(d.jsxs)("span",{children:[e,":"]}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("button",{className:Z.a.btn,type:"button",onClick:function(){return c(a)},children:"Remove"})]})},B=function(t){var e=t.contacts,n=t.deleteContact;return Object(d.jsx)("ul",{className:L.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsx)("li",{className:L.a.item,children:Object(d.jsx)(E,{name:a,number:c,onDeleteContact:function(){return n(e)}})},e)}))})},D=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.setState((function(t){return t.contacts.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts!")):{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:Object(i.a)(t.contacts.filter((function(t){return t.id!==e})))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value.toLocaleLowerCase()})},t.turnOnFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(j,{title:"Phonebook",children:[Object(d.jsx)(C,{title:"You can add new contacts below:",children:Object(d.jsx)(N,{onSubmit:this.addContact})}),Object(d.jsxs)(C,{title:"Contacts",children:[Object(d.jsx)(q,{filter:this.state.filter,onChangeFilter:this.changeFilter}),""===this.state.filter?Object(d.jsx)(B,{contacts:this.state.contacts,deleteContact:this.deleteContact}):Object(d.jsx)(B,{contacts:this.turnOnFilter(),deleteContact:this.deleteContact})]})]})}}]),n}(c.a.Component),J=D;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.05a7933c.chunk.js.map