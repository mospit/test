['change','click'].forEach( e => {document.getElementsByTagName("body")[0].addEventListener("click", (e) => {
  let selctors = [];
  let count = 0;
  const arr = [];

  selctors.push({
    id: e.target.id,
    name: e.target.name,
    className: e.target.className,
    placeholder: e.target.placeholder
  });
  console.log(selctors[count]);
  count++;
  console.log(count);
});}

document
  .getElementsByTagName("body")[0]
  .addEventListener("change", async (e) => {
    console.log(e.target);
  });

  let identifiers = [];
  let count = 0;
  ['click','change','submit'].forEach( e => 
    document.getElementsByTagName("body")[0].addEventListener(e, (e) => {
      
    e.preventDefault()
    identifiers.push({
        event: e,
        id: e.target.id,
        name: e.target.name,
        className: e.target.className,
        placeholder: e.target.placeholder,
        x: e.x,
        y: e.y
      });
      console.log(identifiers[count]);
      count++;
      console.log(count);
    })
);

let events = ['change','click'];
for(let i = 0; i< events.length; i++){
  document.getElementsByTagName("body")[0].addEventListener(events[i], (e) => {
    let selctors = [];
    let count = 0;
  
    selctors.push({
      event: e,
      id: e.target.id,
      name: e.target.name,
      className: e.target.className,
      placeholder: e.target.placeholder
    });
    console.log(selctors[count]);
    count++;
    console.log(count);
  })
}

document.getElementsByName("Submit").scrollIntoView();

window.scrollTo(0, document.getElementsByName('Submit').offsetTop - document.getElementsByClassName('header')[0].offsetHeight);
let a = [{
  id: "fNmae",
  name: "F_name",
  x: "121",
  y:"600"
}];

for( let i = 0; i < a.length; i++) {
  if(a[0].x > 0){
    window.scrollTo(a[i].x, a[i].y);
  }
}

document.getElementsByTagName("body")[0].addEventListener("scroll", (e) => {
  console.log(e)
})

document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  const xpaths = [
    `${e.target.tagName}[id='${e.target.id}']`,
    `${e.target.tagName}[name='${e.target.name}']`,
    `${e.target.tagName}[placeholder='${e.target.placeholder}']`,
    `${e.target.tagName}[className='${e.target.className}']`,
    `${e.target.tagName}[type='${e.target.type}']`
]
for(let i = 0; i< xpaths.length; i++ ) {
  const xpath = document.querySelector(xpaths[i])
  if( e.target.isEqualNode(xpath)) {
    console.log(xpaths[i]);
  }
}
});
const parent = document.querySelector('body');
const mutationObserver = new MutationObserver(entries => {
  console.log(entries);
});

mutationObserver.observe(parent, {childList: true})
