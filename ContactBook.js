const contacts=[{name:'Ana',phone:'123',email:'ana@x.com'}];
const find=n=>contacts.find(c=>c.name===n);
const update=(n,d)=>{const c=find(n); if(c) Object.assign(c,d);} 
// usage example
update('Ana',{phone:'999'}); console.log(find('Ana'));
